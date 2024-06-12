"use client";
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { useSession } from "next-auth/react";

const useClient = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { data: session } = useSession();
  const serverUrl= 'http://localhost:3001'

  useEffect(() => {
    // const newSocket = io(serverUrl);
    // setSocket(newSocket);

    if (!session) {
      return;
    }  

    const newSocket = io(serverUrl, {
      auth: {
        // @ts-ignore
        token: session?.user?.token,
      },
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [session]);

  return socket;
};

export default useClient;
