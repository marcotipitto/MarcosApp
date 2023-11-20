import React, { useEffect, useState } from 'react';
import '../styles/action-card.scss';
import '../styles/header.scss';
import { Title, BarrelRollText, ActionCard } from '../components';
import { actionCardData } from '../data';
import { ActionCardProps } from '../models';

export const Header = () => {

  const [actionCards, setActionCards] = useState<ActionCardProps[]>([]);

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type":"application/json"
  //     }
  //   }
  //   fetch('http://localhost:3001/api/v1/actionCard', requestOptions)
  //     .then(response => response.json())
  //     .then((response: ActionCardProps[]) => {
  //       response = response.sort((a, b) => a.priority - b.priority);
  //       console.log('actionCard Response: ', response);
  //       setActionCards(response);
  //     })
  //     .catch((error) => console.error(error))
  // }, [setActionCards])

  
  return (
    <div className="header">
      <div>
        <Title />
        <BarrelRollText />
        {
          actionCards && (
            <div className="action-card-container">
              {actionCardData.map((actionCard: ActionCardProps, index: number) => 
                <ActionCard {...actionCard} key={index}/>
              )}
          </div>
          )
        }
      </div>
      <img className="profile-pic" src="images/portrait.png" alt="profile-pic"></img>
    </div>
  );
};