export interface IMentoringInfo {
  id: number;
  title: string;
  create_at: Date;
  location: string;
  match: boolean;
  mento: number;
  mentee: number | null;
  mento_username: string;
  mento_language: string;
  mentee_username: string | null;
  mentee_language: string | null;
}

export interface IMentoringDetail {
  mento: number;
  mentee: number | null;
  title: string;
  created_at: Date;
  location: string;
  match: boolean;
  comments: Array<string>;
  mento_username: string;
  mento_language: string;
  mentee_username: string | null;
  mentee_language: string | null;
}
