import React from 'react';
import { InfoCard } from './info-card';
import { ListCard } from './list-card';
import { SectionProps, InfoCardProps, ListCardProps } from '../models';
import '../styles/section.scss';

export const Section = (props: SectionProps) => {
    return (
        <div>
            <h1 className="section-headline">{props.sectionTitle}</h1>
            {( props.infoCardData || props.listCardData ) && (
                <div className="card-container">
                    {props.listCardData?.map(
                        (listCardData: ListCardProps, index: number) => 
                            <ListCard {...listCardData} key={index}/>
                        )
                    }
                    {props.infoCardData?.map(
                        (infoCardData: InfoCardProps, index: number) => 
                            <InfoCard {...infoCardData} key={index}/>
                        )
                    }
                </div>
            )}
        </div>
    )
}