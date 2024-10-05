export interface IRecruitInfo {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  posted_date: string;
}

export interface IFilterItem {
  label: string;
  defaultValue: string;
  options: Array<string>;
}
