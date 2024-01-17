import { createMachine, assign } from "xstate";

export const temperatureConverterMachine = createMachine(
  {
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