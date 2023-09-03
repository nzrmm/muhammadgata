import { BiLoader } from "react-icons/bi";

import { DropdownMenu } from "@/components";
import { THEMES, THEME_ICON } from "@/constants";
import { cn } from "@/utils";
import { useTheme } from "@/hooks";

const ThemeSelector = () => {
  const { mounted, setTheme, theme } = useTheme();

  if (!mounted) {
    return (
      <div className={cn("w-8 h-8 flex items-center justify-center")}>
        <BiLoader />
      </div>
    );
  }

  return (
    <DropdownMenu
      buttonTitle="Switch Theme"
      renderIcon={() => {
        switch (theme) {
          case "light":
            return <THEME_ICON.light />;
          case "dark":
            return <THEME_ICON.dark />;
          case "system":
            return <THEME_ICON.system />;
          default:
            return null;
        }
      }}
      renderItems={({ Item }) => {
        return THEMES.map((theme) => (
          <Item
            as={"div"}
            key={theme.value}
            onClick={() => setTheme(theme.value)}
          >
            {({ active }) => (
              <button
                className={cn(
                  "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                  { "bg-neutral-100 dark:bg-neutral-800": active }
                )}
              >
                <theme.icon />
                <span className={cn("ml-2")}>{theme.name}</span>
              </button>
            )}
          </Item>
        ));
      }}
    />
  );
};

export default ThemeSelector;
