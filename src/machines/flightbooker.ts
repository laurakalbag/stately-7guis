import { createMachine } from "xstate";

export const machine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDMA2BLKALALgIQHsCBrMAJwDoBBAAgnWWXLADscbYcBDHMGlrgFswAYhZgAHjgDaABgC6iUAAcCsdDnQEWSkBMQBGAEwA2CgYDsBgBwWArABoQAT0QmzJu0YDMAFm-2AL7BTiwEEHC6aJi4hCTkuqrqmtq6+ggAtL7WTq6ZFtYhINHY+ESklLT0jMxsHNy8-EJgiWoaWjpIeoiyuT1FJbHl5BQAymAAxtoQNKMNLV1J7ald6UYAnGYWJrIW-ka7vod9CEZGFHZ7RjZBwYFAA */
    id: "flightBooker",
    initial: "A different state name",
    states: {
      "A different state name": {
        on: {
          next: {
            target: "Second State",
          },
        },
      },
      "Second State": {},
    },
    types: { events: {} as { type: "next" } },
  },
  {
    actions: {},
    actors: {},
    guards: {},
    delays: {},
  },
);
