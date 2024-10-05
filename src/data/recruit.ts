import { IFilterItem, IRecruitInfo } from "@/type/recruit";

export const filterList: Array<IFilterItem> = [
  {
    label: "Location",
    defaultValue: "Location All",
    options: [
      "Location All",
      "Nam-gu",
      "Buk-gu",
      "Dong-gu",
      "Seo-gu",
      "Busanjin-gu",
      "Jung-gu",
    ],
  },
  {
    label: "Language",
    defaultValue: "Language All",
    options: [
      "Language All",
      "English",
      "Korean",
      "Japanese",
      "Chinese",
      "Vietnamese",
      "Indian",
    ],
  },
  {
    label: "Theme",
    defaultValue: "Theme All",
    options: [
      "Theme All",
      "IT",
      "Design",
      "Marketing",
      "Business",
      "Law",
      "Engineering",
      "Society",
    ],
  },
] as const;
