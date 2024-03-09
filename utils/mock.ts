import type { ActionResponse } from "@/models/ActionModel";
import { wait } from "./wait";

export const mockResponse = (delay: number, res: ActionResponse) => {
  return wait(delay, res);
};
