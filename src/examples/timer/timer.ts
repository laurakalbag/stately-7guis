import { createMachine } from "xstate";

export const timer = createMachine(
  {
    id: "timer",

    initial: "First State",

    states: {
      "First State": {
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
