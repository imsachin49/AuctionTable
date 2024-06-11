"use client";
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { useSession } from "next-auth/react";

const useClient = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { data: session } = useSession();
  const serverUrl= 'http://localhost:3001'

  if (!session) {
    return null;
  }


  useEffect(() => {
    // const newSocket = io(serverUrl);
    // setSocket(newSocket);

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
  }, [serverUrl]);

  return socket;
};

export default useClient;
