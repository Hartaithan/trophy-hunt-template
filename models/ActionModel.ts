export type ActionStatus = "success" | "error";

export interface ActionResponse<T = any> {
  status: ActionStatus;
  message: string;
  data?: T;
}
