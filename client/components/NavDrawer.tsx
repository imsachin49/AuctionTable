import Link from "next/link";
import Logo from "./Logo";
import sidebarItems from "./data/sidebar-icons";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import LoginButton from "./LoginModal";

export default function NavDrawer({
  isDrawerOpen,
  toggleDrawer,
  signOut,
  isLoggedIn,
  pathname,
}: any) {
  return (
    <div
      className={`fixed top-0 left-0 z-40 h-screen shadow-md p-4 overflow-y-auto transition-transform bg-white w-52 dark:bg-gray-800 ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Logo isShowFullLogo={true} />
      <div className="py-5 overflow-y-auto mt-4">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`flex items-center p-2 w-full rounded-lg dark:text-white hover:bg-gray-100 group 
              ${pathname == item.link ? "text-indigo-500" : "text-gray-500"}`}
            >
              <item.icon className={`text-xl`} />
              <span className="ms-3">{item.name}</span>
            </Link>
          ))}
          {isLoggedIn && (
            <button
              onClick={() => signOut()}
              className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <LuLogOut className="text-xl" />
              <span className="ms-3">Logout</span>
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}
