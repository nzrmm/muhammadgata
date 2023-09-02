import { Fragment } from "react";
import cx from "classnames";
import { Menu, Transition } from "@headlessui/react";

type IDropdownMenu = {
  renderIcon: () => React.ReactNode;
  renderItems: (menu: typeof Menu) => React.ReactNode;
};

const DropdownMenu = ({ renderIcon, renderItems }: IDropdownMenu) => {
  return (
    <Menu as="div" className={cx("relative z-40")}>
      <Menu.Button
        className={cx(
          "inline-flex justify-center items-center",
          "h-8 w-8 rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-800"
        )}
      >
        {() => <>{renderIcon()}</>}
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
          className={cx(
            "absolute right-0 shadow-lg rounded-md divide-y w-40 mt-2",
            "bg-white divide-neutral-200",
            "dark:bg-neutral-900 dark:divide-neutral-800"
          )}
        >
          {() => <>{renderItems(Menu)}</>}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
