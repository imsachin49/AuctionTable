export default function TabButton  ({ tabId, activeTab, setTab, text }: { tabId: number, activeTab: number, setTab: (tabId: number) => void, text: string }) {
  return (
    <button
      className={`px-2 sm:px-5 text-center cursor-pointer text-xs font-semibold shadow-md border border-t-gray-100 py-2 sm:py-3 rounded-md ${
        activeTab === tabId ? "bg-[#32c36c] text-white shadow-none" : ""
      }`}
      onClick={() => setTab(tabId)}
    >
      {text}
    </button>
  );
};