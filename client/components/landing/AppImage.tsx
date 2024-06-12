import Image from "next/image";

export default function AppImage() {
  return (
    <div className="p-5 px-1 md:px-5 flex justify-center md:justify-center sm:my-16 my-24 items-center mx-4 flex-col md:flex-row mb-4">
      <div className="flex justify-center items-center">
        <img src="/appps.gif" alt="app-image" className="rounded-xl sm:w-[80%] w-full object-cover" />
      </div>
      <div className="hidden md:flex flex-col max-w-lg flex-1 p-5 h-fit mr-5 rounded-lg items-center justify-center ">
        <div className="flex items-center justify-center flex-col w-full">
          <img src="/auction1.png" alt="logo" className="h-[80px] md:h-[180px]"/>
        </div>
      </div>
    </div>
  );
}
