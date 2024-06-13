import Logo from "./Logo";
import sidebarItems from "./data/sidebar-icons";

export default function NavDrawer({ isDrawerOpen, toggleDrawer }: any) {
  return (
    <div className={`fixed top-0 left-0 z-40 h-screen shadow-md p-4 overflow-y-auto transition-transform bg-white w-52 dark:bg-gray-800 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <Logo isShowFullLogo={true} />
      <div className="py-5 overflow-y-auto mt-4">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item, index) => (
            <button key={index} className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <item.icon className="text-xl text-[#a33434]" />
              <span className="ms-3">{item.name}</span>
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}