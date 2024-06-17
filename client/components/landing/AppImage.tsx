import Image from "next/image";

export default function AppImage() {
  return (
    <div className="p-5 px-1 md:px-5 flex justify-center sm:my-16 my-24 items-center mx-4 flex-col md:flex-row mb-4 gap-2">
      <div className="flex justify-center items-center">
        <Image
          height={400}
          width={700}
          src="/appps.gif"
          alt="app-image"
          className="rounded-xl"
        />
      </div>
      <div className="hidden md:flex p-5 mr-5 rounded-lg items-center justify-center">
        <Image height={120} width={120} src="/auction1.png" alt="logo" />
      </div>
    </div>
  );
}
