import { createMachine } from "xstate";

export const machine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMBOBXCA6AEmVYA5LAAQCGJAZgJaqwAuJDZ9YAxAHZgAe9A2gAYAuolAAHAPaxq9ahI6iQ3RAA4ALFgCcANgGaAzAHYArABoQAT0THjWNdpUmAvi-McJEOIrSZFk6bLyisoIALRqKuZWYYYqriA+2HgExORUtAxM9CxgflIycgpISogCUaXxiVgAymDI8hAk1dmseQGFwYgATDpYhrqGavpdAoOjauUIXV1YxoNdAIyOxi4uQA */
    id: "crud",
    initial: "Here's a first state",
    states: {
      "Here's a first state": {
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
