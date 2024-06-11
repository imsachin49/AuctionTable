const { asyncHandler } = require('../utils/asyncHandler');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const User = require('../models/User');
const Player = require('../models/Player');
const { convertTimeToTimestamp, convertTimeStampToTime } = require('../utils/timeConversions');

// add a new player
const addNewPlayer = asyncHandler(async (req, res) => {
    const { name, description, startTime, endTime, startPrice,picture } = req.body;
    const sellerId = req.user.id;

    try {
        if (!name || !description || !startTime || !endTime || !startPrice || !picture) {
            throw new ApiError(401, "All Fields are required !!");
        }

        if (!sellerId) {
            throw new ApiError(402, "Can't add the Player  Seller is not Found.. !!");
        }

        // startTime and endTime must be in the future
        const now = new Date().getTime();
        console.log("now", now);

        if (startTime < now || endTime < now) {
            throw new ApiError(403, "Start time and end time must be in the future");
        }

        // Check if startTime is before endTime
        if (startTime > endTime) {
            throw new ApiError(403, "Start time must be before end time");
        }

        if (startPrice <= 0) {
            throw new ApiError(404, "Start Price can't be zero or lesser");
        }

        // Check if the seller is a user
        const user = await User.findById(sellerId);

        if (!user) {
            throw new ApiError(405, "Seller not found");
        }

        const newPlayer = new Player({
            name,
            description,
            startTime,
            endTime,
            startPrice,
            picture,
            sellerId
        });

        // Save the player
        const player = await newPlayer.save();

        if (!player) {
            throw new ApiError(406, "Unable to create the");
        }

        // Return the player
        res.status(200).json(new ApiResponse(200, player, "Player Created Successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// Delete a player
const deletePlayer = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        if (!id) {
            throw new ApiError(401, "Player id is required");
        }

        if (!userId) {
            throw new ApiError(402, "User id is required");
        }

        const player = await Player.findById(id);

        if (!player) {
            throw new ApiError(403, "Player not found");
        }

        const deletedPlayer = await Player.findByIdAndDelete(id);

        if (!deletedPlayer) {
            throw new ApiError(405, "Unable to delete the player");
        }

        res.status(200).json(new ApiResponse(200, deletedPlayer, "Player deleted successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// get all players
const getAllPlayers = asyncHandler(async (req, res) => {
    try {
        const players = await Player.find();
        if (!players) {
            throw new ApiError(401, "No players found");
        }
        res.status(200).json(new ApiResponse(200, players, "Players fetched successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// update a player
const updatePlayer = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, description, startTime, endTime, startPrice,picture } = req.body;
    const userId = req.user.id;

    try {
        // object to store the updated fields
        const updateFields = {};
        const now = new Date().getTime();

        if (name) updateFields.name = name;
        if (description) updateFields.description = description;
        if (picture) updateFields.picture = picture;
        // check if the start time is in the future
        if (startTime) {
            if (startTime < now) {
                throw new ApiError(401, "Start time must be in the future");
            } else {
                updateFields.startTime = startTime;
            }
        }
        // check if the end time is in the future
        if (endTime) {
            if (endTime < now) {
                throw new ApiError(401, "End time must be in the future");
            } else {
                updateFields.endTime = endTime;
            }
        }
        // check if the start price is greater than 0
        if (startPrice) {
            console.log("startPrice", startPrice)
            if (startPrice <= 0) {
                throw new ApiError(402, "Start Price can't be zero or lesser");
            } else {
                updateFields.startPrice = startPrice;
            }
        }

        // Check if the player id is provided
        if (!id) {
            throw new ApiError(401, "Player id is required");
        }

        // Check if the user is logged in
        if (!userId) {
            throw new ApiError(402, "User id is required");
        }

        // Check if the player exists
        const player = await Player.findById(id);
        console.log("player", player)
        if (!player) {
            throw new ApiError(404, "Player not found");
        }

        // if only startTime was provided then check if it is before endTime
        if (startTime && !endTime) {
            if (startTime > player.endTime) {
                throw new ApiError(401, "Start time must be before end time");
            }
        }

        // if only endTime was provided then check if it is after startTime
        if (endTime && !startTime) {
            if (endTime < player.startTime) {
                throw new ApiError(401, "End time must be after start time");
            }
        }

        // if both start time and end time are provided then check if start time is before end time
        if (startTime && endTime) {
            if (startTime > endTime) {
                throw new ApiError(401, "Start time must be before end time");
            }
        }

        // you can only update the player if you are the seller will be checked by middlewatre so no need to check here
        // if the player is uncoming then we can update the player

        const updatePlayer = await Player.findByIdAndUpdate(id, updateFields, { new: true });
        res.status(200).json(new ApiResponse(200, updatePlayer, "Player updated successfully"));
    } catch (error) {
        console.log(error);
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// get Player by Id
const getPlayerById=asyncHandler(async(req,res)=>{
    if(!req.params.id) throw new ApiError(401,"player Id not Found");
    try {
        const player=await Player.findById(req.params.id);
        res.status(200).json(new ApiResponse(201,player,"Player Found SuccessFull"));
    } catch (error) {
        console.log(error);
        throw new ApiError(500,error.message,"Internal Serevr Error");
    }
});

// Search by player name/description/seller name/type etc
const searchPlayer = asyncHandler(async (req, res) => {
    const name=req.query.name;

    try {
        console.log("name==>", name)
        const players = await Player.find({name:{$regex:name,$options:'i'}}).populate('sellerId').select('name description startTime endTime startPrice picture sellerId');
        console.log("players", players);
        res.status(200).json(new ApiResponse(200, players, "Search completed successfully"));
    } catch (error) {
        console.log(error);
        throw new ApiError(500, error.message, "Something went wrong");
    }
});

const getAllBidsOfPlayer=asyncHandler(async(req,res)=>{
    if(!req.params.id) throw new ApiError(401,"Player Id not Found");
    try {
        const player=await Player.findById(req.params.id);
        if(!player) throw new ApiError(402,"Player not Found");
        
        // along with the Bids we need the Bidder who has placed the bid.
        const bids=await Player.findById(req.params.id).populate('bids.bidderId').select('bids');
        if(!bids) throw new ApiError(403,"Bids not Found");
        res.status(200).json(new ApiResponse(201,bids,"Bids Found SuccessFull"));
    } catch (error) {
        console.log(error);
        throw new ApiError(500,error.message,"Internal Serevr Error");
    }
});

module.exports = {
    addNewPlayer,
    deletePlayer,
    getAllPlayers,
    updatePlayer,
    searchPlayer,
    getPlayerById,
    getAllBidsOfPlayer
}