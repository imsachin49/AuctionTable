import sidebarItems from "./data/sidebar-icons";
import { IoMdClose } from "react-icons/io";

export default function NavDrawer({ isDrawerOpen, toggleDrawer }: any) {
  return (
    <div className={`fixed top-0 right-0 z-40 h-screen shadow-md p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800 ${ isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      <button
        type="button"
        onClick={toggleDrawer}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 left-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <IoMdClose className="w-8 h-8 text-3xl text-[#a33434]" />
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-5 overflow-y-auto mt-4">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item, index) => (
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <item.icon className="text-xl text-[#a33434]" />
              <span className="ms-3">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
