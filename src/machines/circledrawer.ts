import { createMachine } from "xstate";

export const machine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMCWAnZAbMARdAhgO5joB0AYhrAC4AEAyjQTWAMQB2YAHjQNoAGALqJQABwD2sVDVQSOokN0QBGAOwCyANgEBOAEy6VAVgAsKlQGZjugDQgAnon2Wyxtaf0qAHGuMBfQPsOCQg4RTRMHHxiUkVJaVl5RWUEAFpLLTJ9AU99YytLXTNdb3sndONjMk93bxV8oJBI7DxCEnIqdFpGZlZ4qRk5BSQlVRUyNWK1D28tHVNjAX1y5303Dy9fAP97Fuj20jIGMGR5CF6WMAHE4ZTnXSy1HQ9LHI8BD1WEfXX3Tx8fkCgSAA */
    id: "circleDrawer",
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
