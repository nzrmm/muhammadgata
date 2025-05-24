"use client";

import { useLocale } from "next-intl";

import { DropdownMenu } from "@/components";

import { cn } from "@/utils";
import { setUserLocale } from "@/services/locale";
import { LOCALES } from "@/constants/locale";

const ThemeSelector = async () => {
  const locale = useLocale();

  return (
    <DropdownMenu
      buttonTitle="Switch Language"
      renderIcon={() => {
        switch (locale) {
          case "en":
            return "EN";
          case "id":
            return "ID";
          default:
            return null;
        }
      }}
      renderItems={({ Item }) => {
        return LOCALES.map((locale) => (
          <Item
            as={"div"}
            key={locale.value}
            onClick={() => setUserLocale(locale.value)}
          >
            {({ active }) => (
              <button
                className={cn(
                  "group flex w-full items-center rounded-md px-4 py-2 text-sm",
                  { "bg-neutral-100 dark:bg-neutral-800": active }
                )}
              >
                <span>{locale.name}</span>
              </button>
            )}
          </Item>
        ));
      }}
    />
  );
};

export default ThemeSelector;
