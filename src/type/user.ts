export type TStudentStatus = "none" | "international" | "local";

export interface IUserInfo {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
  local: string | null;
  id_photo: string | null;
  language: string;
  nationality: string;
  is_active: boolean;
  visa_number: string;
  mento: boolean;
  age: number;
  sex: "Male" | "Female";
}
