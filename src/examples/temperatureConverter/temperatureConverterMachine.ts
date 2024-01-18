import { createMachine, assign } from "xstate";

export const temperatureConverterMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBcwFsAOYBOBDZArtmAMID2AdgG46rYDEAYgIIASASgKIByrnAkgBUA2gAYAuolAYysAJbI5lKSAAeiALQAmLQGYAdAHYAjABYAHKd2GArABoQAT017958wDYT52wF9fDqiYOPhEpJQ02HT0JJwAMgDK-ACqCWKSSCAy8orKmeoIWh4GOkU2Hlr2Ti4G7l7GPjb+ASAUZBBwKkFYeITE5NS0OCrZCkoUKgWiDs4Ios2+QA */
    id: "temperatureConverter",
    on: {
      FAHRENHEIT: {
        target: "#temperatureConverter",
        actions: {
          type: "fahrenheit",
        },
      },
      CELSIUS: {
        target: "#temperatureConverter",
        actions: {
          type: "celsius",
        },
      },
    },
  },
  {
    actions: {
      celsius: assign({
        tempC: ({ event }) => event.value,
        tempF: ({ event }) =>
          event.value.length ? +event.value * (9 / 5) + 32 : "",
      }),
      fahrenheit: assign({
        tempC: ({ event }) =>
          event.value.length ? (+event.value - 32) * (5 / 9) : "",
        tempF: ({ event }) => event.value,
      }),
    },
    actors: {},
    guards: {},
    delays: {},
  },
);