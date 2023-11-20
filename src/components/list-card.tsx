import React, { FC } from 'react';
import { ListCardProps, ListItem, SubListItem } from '../models';
import '../styles/list-card.scss';
import '../styles/app.scss';

export const ListCard: FC<ListCardProps> = ({title, subListItems, singleCard}) => {

    return (
        <div className={"card list-card" + (singleCard ? ' single-card' : '')}>
            { title && (
                <h2>{title}</h2>
            )}
            <div className="sublists-container">
                { subListItems.map((subListItem: SubListItem, index: number) => 
                    <div key={index} className="sublist">
                        {subListItem.subtitle && (
                            <h3>{subListItem.subtitle}</h3>
                        )}
                        {/* { subListItem.listItems.map((listItem: ListItem, index: number) => {
                            const listClass = listItem.imageUrl ? 'list-image-item' : 'list-item';
                            return (
                                <div key={index} className={listClass}>
                                    {(listItem.imageUrl && listItem.imageAlt) && (
                                        <img src={listItem.imageUrl} alt={listItem.imageAlt} className="sublist-image"></img>
                                    )}
                                    <p>{listItem.label}</p>
                                </div>
                            )}
                        )} */}
                        <div className='sublist-container'>
                            { subListItem.listItems.map((listItem: ListItem, index: number) => {
                                const listClass = listItem.imageUrl ? 'list-image-item' : 'list-item';
                                return (
                                    <div key={index} className={listClass}>
                                        {(listItem.imageUrl && listItem.imageAlt) && (
                                            <img src={listItem.imageUrl} alt={listItem.imageAlt} className="sublist-image"></img>
                                        )}
                                        <p>{listItem.label}</p>
                                    </div>
                                )}
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}   