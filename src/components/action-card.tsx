import React, { FC } from 'react';
import { ActionCardProps } from '../models';
import { ActionEnum } from '../models';
import '../styles/action-card.scss';
import '../styles/app.scss';

export const ActionCard: FC<ActionCardProps> = ({ title, imageUrl, imageAlt, actionCallback }) => {

    return (
        <div 
            className="action-card" 
            onClick={() => {
                debugger;
                if (actionCallback.actionType === ActionEnum.FILE || actionCallback.actionType === ActionEnum.LINK) {
                    window.open(actionCallback.action, '_blank');
                } else if (actionCallback.actionType === ActionEnum.EMAIL) {
                    window.location.href = actionCallback.action;
                }
            }}
        >
            <img alt={imageAlt} src={imageUrl} className="action-card-icon"></img>
            <h3 className="action-card-text">{title}</h3>
        </div>
    )
}