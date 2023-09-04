import { NavbarItem, ThemeSelector } from "@/components";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

const Header = () => {
  return (
    <div
      className={cn(
        "fixed top-0 w-full bg-white/60 border-b border-b-neutral-200 backdrop-blur-xl z-50",
        "dark:bg-neutral-900/80 dark:border-b-neutral-800"
      )}
    >
      <nav className={cn("flex justify-between items-center h-16 px-6")}>
        <div></div>

        <div className={cn("flex items-center gap-10")}>
          <div className={cn("flex items-center gap-1")}>
            {ROUTES.map((item, index) => (
              <NavbarItem key={index} href={item.href} name={item.name} />
            ))}
          </div>

          <ThemeSelector />
        </div>
      </nav>
    </div>
  );
};

export default Header;
