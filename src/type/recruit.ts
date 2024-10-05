export interface IRecruitDetailInfo {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  ended_date: string;
}

export interface IRecruitInfo {
  title: string;
  company: string;
  ended_date: string;
}

export interface IFilterItem {
  label: string;
  defaultValue: string;
  options: Array<string>;
}
