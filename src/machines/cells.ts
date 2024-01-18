import { createMachine } from "xstate";

export const machine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMwBs2wHQDECWATrAC4AEAysQIbFgDEAdmAB7EDaADALqKgAOAe1h5ieAQ14hmiAIwB2DlgBsHAJwAmVTICsAFhkyAzNtUAaEAE9E6w1m1zd6mQA452gL6fzDARDiTUDHgkEEFhUXFJaQQAWkMlLHUOR3VtI0NVPVVncytY7W0sR3tnGVSvEEDMXEISCmpaSTCRMQkQ6IMsOUy5B2clFV1tDnVc63U7BydXD3dzKuxyMGRxCHqaMCahFsj261UEuRUHQySHDgcxhHUJ+0cXN09PIA */
    id: "cells",
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
