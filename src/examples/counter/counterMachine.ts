import { createMachine, assign } from "xstate";

export const counterMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwGIBJAOQGEAlAUQFkqSAVAbQAYBdRUAB1VgEtsfVJk4gAHogC0AJhYA6AIwsAnAGYA7AFYANCACeUhdM1yALAvXKAbAA4tAX0e7MqCHFFosuPKJ79BwqISCCy6BiGOjkA */
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