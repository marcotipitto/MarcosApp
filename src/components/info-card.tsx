import React, { FC } from 'react';
import { InfoCardProps } from '../models';
import '../styles/info-card.scss';
import '../styles/app.scss';

export const InfoCard: FC<InfoCardProps> = ({title, subtitle, description, imageUrl, imageAlt, hidden}) => {
    return (
        <div className={"card info-card" + (hidden ? ' single-card' : '')}>
            {( title || subtitle || ( imageUrl && imageAlt )) && (
                <div className="info-card-header-container">
                    {( imageUrl && imageAlt ) && (
                        <img className="card-image" src={imageUrl} alt={imageAlt}></img>
                    )}
                    <div className='info-card-header'>
                        { title && (
                            <h2>{title}</h2>
                        )}
                        { subtitle && (
                            <h3>{subtitle}</h3>
                        )}
                    </div>
                </div>)
            }
            <div>
                {description?.map((desc: string, index: number) => 
                    <p key={index} className="description">{desc}</p>
                )}
            </div>
        </div>
    )
}