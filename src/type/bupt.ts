import { questionOptionList } from "@/data/bupt";

export interface IQuestionAnswer {
  description: string;
  type: "bupt" | "me";
}

export type TQuestionOption = (typeof questionOptionList)[number]["value"];

export interface IChatQueryInfo {
  results: {
    generate: {
      question: string;
      generation: string;
      documents: Array<
        Array<
          | ["id", string | null]
          | ["metadata", Record<string, string>]
          | ["page_content", string]
          | ["type", string]
        >
      >;
    };
  };
}
