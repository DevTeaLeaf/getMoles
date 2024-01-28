import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  mole1,
  mole2,
  mole3,
  mole4,
  mole5,
  mole6,
  mole7,
  mole8,
  mole9,
  mole10,
  mole11,
  mole12,
  mole13,
  mole14,
  mole15,
  mole16,
  mole17,
  mole18,
  mole19,
  mole20,
} from "../assets";

import { generateMoleArray } from "../utils";

import type { TFAQ } from "../types";

const ROADMAP = [
  {
    year: 2023,
    quartals: [
      {
        targets: [
          {
            state: "done",
            description: "roadmap_1",
          },
          {
            state: "done",
            description: "roadmap_2",
          },
          {
            state: "done",
            description: "roadmap_3",
          },
          {
            state: "done",
            description: "roadmap_4",
          },
        ],
      },
    ],
  },
  {
    year: 2024,
    quartals: [
      {
        targets: [
          {
            state: "progress",
            description: "roadmap_5",
          },
          {
            state: "progress",
            description: "roadmap_6",
          },
          {
            state: "progress",
            description: "roadmap_7",
          },
          {
            state: "progress",
            description: "roadmap_8",
          },
        ],
      },
      {
        targets: [
          {
            state: "do",
            description: "roadmap_9",
          },
          {
            state: "do",
            description: "roadmap_10",
          },
          {
            state: "do",
            description: "roadmap_11",
          },
        ],
      },
      {
        targets: [
          {
            state: "do",
            description: "roadmap_12",
          },
          {
            state: "do",
            description: "roadmap_13",
          },
        ],
      },
      {
        targets: [
          {
            state: "do",
            description: "roadmap_14",
          },
          {
            state: "do",
            description: "roadmap_15",
          },
        ],
      },
    ],
  },
  {
    year: 2025,
    quartals: [
      {
        targets: [
          {
            state: "do",
            description: "roadmap_16",
          },
          {
            state: "do",
            description: "roadmap_17",
          },
          {
            state: "do",
            description: "roadmap_18",
          },
        ],
      },
      {
        targets: [
          {
            state: "do",
            description: "roadmap_19",
          },
          {
            state: "do",
            description: "roadmap_20",
          },
          {
            state: "do",
            description: "roadmap_21",
          },
        ],
      },
      {
        targets: [
          {
            state: "do",
            description: "roadmap_22",
          },
          {
            state: "do",
            description: "roadmap_23",
          },
        ],
      },
    ],
  },
];

const TOKENOMICS = [
  {
    name: "presale",
    color: "#6C4EE0",
    percents: 50,
    value: "1 500 000 000",
  },
  {
    name: "p2e_staking",
    color: "#57DBA4",
    percents: 30,
    value: "900 000 000",
  },
  {
    name: "dex",
    color: "#57C3DB",
    percents: 5,
    value: "150 000 000",
  },
  {
    name: "community",
    color: "#835C44",
    percents: 5,
    value: "150 000 000",
  },
  {
    name: "team",
    color: "#C0E13D",
    percents: 5,
    value: "150 000 000",
  },
  {
    name: "advisors",
    color: "#FFB800",
    percents: 3,
    value: "90 000 000",
  },
  {
    name: "marketing",
    color: "#D9D9D9",
    percents: 2,
    value: "60 000 000",
  },
];

const TEAM = [
  {
    userName: "@Andrew",
    description: "team_description_1",
    avatar: avatar1,
  },
  {
    userName: "@Shamshi",
    description: "team_description_2",
    avatar: avatar2,
  },
  {
    userName: "@TaiNa",
    description: "team_description_3",
    avatar: avatar3,
  },
  {
    userName: "@Leaf",
    description: "team_description_4",
    avatar: avatar4,
  },
  {
    userName: "@SI",
    description: "team_description_5",
    avatar: avatar5,
  },
  {
    userName: "@Misha",
    description: "team_description_6",
    avatar: avatar6,
  },
];

const HOME_FAQ: TFAQ[] = [
  {
    type: "normal",
    question: "question_1",
    answers: ["answer_1", "answer_2", "answer_3"],
  },
  {
    type: "normal",
    question: "question_2",
    answers: ["answer_4", "answer_5"],
  },
  {
    type: "normal",
    question: "question_3",
    answers: ["answer_6"],
  },
  {
    type: "normal",
    question: "question_4",
    answers: ["answer_7"],
  },
  {
    type: "list",
    question: "question_5",
    answers: [
      { listHead: "answer_8", listBody: ["answer_9"] },
      { listHead: "answer_10", listBody: ["answer_11", "answer_12"] },
    ],
  },
  {
    type: "steps",
    question: "question_6",
    answers: [
      { step: "answer_13", stepDesc: "answer_14" },
      { step: "answer_15", stepDesc: "answer_16" },
      { step: "answer_17", stepDesc: "answer_18" },
      { step: "answer_19", stepDesc: "answer_20" },
    ],
  },
];

const TO_LEFT_TICKER = generateMoleArray(
  [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9, mole10],
  5
);
const TO_RIGHT_TICKER = generateMoleArray(
  [
    mole11,
    mole12,
    mole13,
    mole14,
    mole15,
    mole16,
    mole17,
    mole18,
    mole19,
    mole20,
  ],
  5
);

export { ROADMAP, TOKENOMICS, TEAM, HOME_FAQ, TO_LEFT_TICKER, TO_RIGHT_TICKER };
