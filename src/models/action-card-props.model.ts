import { ActionCallback } from "./action-callback.model";

export interface ActionCardProps {
    title?: string;
    imageUrl: string;
    imageAlt: string;
    actionCallback: ActionCallback;
    priority: number;
}