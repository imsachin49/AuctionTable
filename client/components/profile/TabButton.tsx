export const TabButton = ({ icon, text, tab, currentTab, setTab }: { icon: React.ReactNode, text: string, tab: string, currentTab: string, setTab: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <button onClick={() => setTab(tab)} className={`cursor-pointer sm:px-3 px-1 py-[3px] text-xs sm:text-sm flex items-center gap-[2px] sm:gap-2 ${currentTab === tab ? " border-t w-fit px-[2px] border-black text-black" : "text-gray-700 text-sm font-light "}`}>
            {icon}{text}
        </button>
    );
};