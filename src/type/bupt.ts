import { questionOptionList } from '@/data/bupt';

export interface IQuestionAnswer {
  description: string;
  type: 'bupt' | 'me';
}

export type TQuestionOption = (typeof questionOptionList)[number]['value'];
