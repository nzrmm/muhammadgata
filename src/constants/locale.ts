import { Locale } from "@/i18n/config";

export type ILocaleType = {
  name: string;
  value: Locale;
};

export const LOCALES: ILocaleType[] = [
  { name: "EN", value: "en" },
  { name: "ID", value: "id" },
];
