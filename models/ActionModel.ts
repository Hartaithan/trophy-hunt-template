import type { ReactNode } from "react";

export type ActionStatus = "success" | "error";

export interface ActionResponse<T = any> {
  status: ActionStatus;
  message: string | ReactNode;
  data?: T;
}
