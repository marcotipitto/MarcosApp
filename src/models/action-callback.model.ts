import { ActionEnum } from "./action.enum";

export interface ActionCallback {
    actionType: ActionEnum,
    action: string,
}