import { createMachine } from "xstate";

export const flightBookerMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QDMA2BLKALALgIQHsCBrMAJwDoAxdM2HAAgGUcBDHMAYgDswAPHAG0ADAF1EoAA4FY6HOgLcJIPogCMAdmEUAbMICcAJn1qArABY1agMyn9AGhABPRIesVTG84bUAODaYAvsGO3AQQcMpomLiEJOTK0rLyisqqCAC01joUhsLehqY21voW+r6OLpmmphTenr5qhSEg0dj4RKSUNHSMLOxgiTJyCkpIKupqFBqlGl6+OnrmpsKGla6GHl4+-kGBjm2xneQUTGAAxooQzGwcQ8mjaa76ORp6XtZ5XsJe6wiGm083j8AWCwSAA */
    id: "flightBooker",

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
    description: `Machine Two`
  },
  {
    actions: {},
    actors: {},
    guards: {},
    delays: {},
  },
);
