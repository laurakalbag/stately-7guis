import { createMachine } from "xstate";

export const crudMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMBOBXCA6AYgS1VgBcACAZSIEMiwBiAOzAA8iBtABgF1FQAHAe1h4iefvR4gmiAEwBGAKxYAnNKUA2ABwB2eQBoQAT0RL2WHQF9L++vwhwJaTBIFCRYiVIQBaACwb9Rt5aGlYgjtj4hKQU1GDOgsKi4kiSiGrsAcbsoeFYZGDIYhDkVDTxrkkeiADM1dLKsj7satJ6hlmWlkA */
    id: "crud",
    initial: "First State",
    states: {
      "Not a ghost": {
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
