import { actorFromStately } from "@statelyai/sky";
import { skyConfig } from "./counterMachine.sky";

export const counterMachine = actorFromStately(
  {
    apiKey: "sta_67b85e94-f83d-4b88-8ef6-2250a15afc09",
    url: "https://sky.stately.ai/NNoyE8",
    sessionId: "shared-session",
  },
  skyConfig
);
