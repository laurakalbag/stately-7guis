import { createMachine, assign } from "xstate";

export const counterMachine = createMachine(
  {
    context: {
      count: 0,
    },
    id: "counter",
    on: {
      INCREMENT: {
        target: "#counter",
        actions: {
          type: "increment",
        },
      },
    },
    types: {
      events: {} as { type: "INCREMENT" },
      context: {} as { count: number },
    },
  },
  {
    actions: {
      increment: assign({ count: ({ context }) => context.count + 1 }),
    },
    actors: {},
    guards: {},
    delays: {},
  },
);