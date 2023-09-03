import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { cn } from "@/utils";

type IDropdownMenuProps = {
  buttonTitle: string;
  renderIcon: () => React.ReactNode;
  renderItems: (menu: typeof Menu) => React.ReactNode;
};

const DropdownMenu = ({ buttonTitle, ...props }: IDropdownMenuProps) => {
  return (
    <Menu as="div" className={cn("relative z-40")}>
      <Menu.Button
        as="button"
        title={buttonTitle}
        className={cn(
          "inline-flex justify-center items-center",
          "h-8 w-8 rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-800"
        )}
      >
        {() => <>{props.renderIcon()}</>}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={cn(
            "absolute right-0 shadow-lg rounded-md divide-y w-40 mt-2",
            "bg-white divide-neutral-200",
            "dark:bg-neutral-900 dark:divide-neutral-800"
          )}
        >
          {() => <>{props.renderItems(Menu)}</>}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
