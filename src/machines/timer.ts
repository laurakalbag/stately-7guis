import { createMachine } from "xstate";

export const timerMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBcCWBbMAnAdAMVS1mQAIBlZAQ2TAGIA7MAD2QG0AGAXUVAAcB7WKjT96PEE0QBGAOzscANnYBOAEzKpAVgAsUqQGZNygDQgAnolX6cmmdtVSAHDM0Bfd6fr8IccWkxY4gJCImJIEogAtPoKOKrs9qqaBvrKOsqOphYIkZqaOPa2jlJJHiD+2PiExORUNEGCwqii4pIIejgyaTJ2jgpK2prsqlmWqjZ2Ds5urqYVuGRgAMaiELXUYA0hzWGgbeqxMkp2+vF27HajCKrjtvZOLu7uQA */
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
