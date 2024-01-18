import { createMachine } from "xstate";

export const machine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMBOBXCA6AYgS1VgBcACAZSIEMiwBiAOzAA8iBtABgF1FQAHAe1h4iefvR4gmiAIwB2dlgBs7AJwAmFdICsAFmnSAzFpUAaEAE9Eag1i2yda6QA5ZWgL4ez9fhDgS0mBICQiJiElIIALQGilhq7A5qWoYGKroqTmaWUVpaWA52TtJJniAB2PiEpBTUYEGCwqLiSJIy0liyabL2TorKOlrsallWarb2ji7ubmblWGRgyGIQ5FQ09SFN4VYqsbLK9gbx9uz2IwhqY3YOzq4eHkA */
    id: "crud",
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
