import sidebarItems from "./data/sidebar-icons";

export default function Sidebar() {
  return (
    <div className="w-[200px] sticky top-20 hidden md:block">
      <nav className="p-6 w-full flex flex-col overflow-auto">
        <ul className="space-y-1.5">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 cursor-pointer p-[3px] pl-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-800 hover:border-gray-800"
            >
              <item.icon className="text-xl text-[#a33434]" />
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}