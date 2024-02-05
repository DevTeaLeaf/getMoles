type TNormalQuestion = {
  type: "normal";
  question: string;
  answers: string[];
};

type TListAnswer = {
  listHead: string;
  listBody: string[];
};

type TListQuestion = {
  type: "list";
  question: string;
  answers: TListAnswer[];
};

type TStepsAnswer = {
  step: string;
  stepDesc: string;
};

type TStepsQuestion = {
  type: "steps";
  question: string;
  answers: TStepsAnswer[];
};

type TFAQ = TNormalQuestion | TListQuestion | TStepsQuestion;

type TTokenomicsSliceAnimation = {
  [key: string]: boolean;
};

export type { TFAQ, TTokenomicsSliceAnimation };
