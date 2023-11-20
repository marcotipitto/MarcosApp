import React, { useEffect } from 'react';
import { useState } from "react";
import { useInterval } from '../helpers';
import { titles } from '../data';
import '../styles/barrell-roll-text.scss'

export const BarrelRollText = () => {
    const [index, setIndex] = useState(0);
    const [title, setTitle] = useState(titles[index]);
    const [rollClass, setRollClass] = useState('');

    const card = document.querySelector('.card');
    card?.addEventListener( 'click', function() {
        card?.classList.toggle('is-flipped');
    });

    useInterval(() => {
        if (index === titles.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        setTitle(titles[index]);
    }, 3000);

    useEffect(() => {
        if (rollClass !== 'forward') {
            setRollClass('forward');
        } else {
            setRollClass('backward');
        }
    }, [title])

    return (
        <>
            <h1 className={`roll ${rollClass} title-outline`}>{ title }</h1>
        </>
    );
}
