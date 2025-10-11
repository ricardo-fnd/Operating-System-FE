import { useUpdateHistory } from "src/context";
import { useLabels } from "src/services/client";

const StyledShortcuts = "flex flex-col gap-4 w-full max-w-md";
const StyledShortcutsTitle = "text-sm font-semibold text-zinc-400 uppercase tracking-wide";
const StyledShortcutsList = "flex flex-col gap-2";
const StyledShortcut = "flex items-center justify-between p-4 bg-black/90 hover:bg-zinc-900 border border-zinc-700 rounded-lg cursor-pointer transition-colors";
const StyledShortcutName = "text-base font-medium";
const StyledShortcutUrl = "text-xs text-zinc-500";

const SHORTCUTS = [
  { name: "Spaceflight Now", url: "spaceflightnow.com" },
  { name: "React Documentation", url: "react.dev" },
  { name: "Fox News", url: "foxnews.com" },
];

const Shortcuts = () => {
  const getLabel = useLabels();
  const updateHistory = useUpdateHistory();

  const handleShortcutClick = (url: string) => {
    updateHistory((history) => {
      const urls = history.map(({ search }) => ({ active: false, search }));
      return [...urls, { active: true, search: url }];
    });
  };

  return (
    <div className={StyledShortcuts}>
      <h2 className={StyledShortcutsTitle}>
        {getLabel("apps.browser.landing.shortcuts-title")}
      </h2>
      <div className={StyledShortcutsList}>
        {SHORTCUTS.map((shortcut) => (
          <div
            key={shortcut.url}
            className={StyledShortcut}
            onClick={() => handleShortcutClick(shortcut.url)}
          >
            <span className={StyledShortcutName}>{shortcut.name}</span>
            <span className={StyledShortcutUrl}>{shortcut.url}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shortcuts;

