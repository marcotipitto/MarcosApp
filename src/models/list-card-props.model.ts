import { SubListItem } from "./sublist-item.model";

export interface ListCardProps {
    title?: string;
    subListItems: SubListItem[];
    singleCard?: boolean;
}
