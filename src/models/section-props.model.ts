import { InfoCardProps } from "./info-card-props.model";
import { ListCardProps } from "./list-card-props.model";

export interface SectionProps {
    sectionTitle: string;
    infoCardData?: InfoCardProps[];
    listCardData?: ListCardProps[];
    priority: number;
};
