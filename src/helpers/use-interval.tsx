import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export const useInterval = (callback: Function, delay: number) => {
    const savedCallback = useRef(Function());

    useEffect(() => {
        if (callback) {
            savedCallback.current = callback;
        }
    }, [callback]);

    useEffect(() => {
        function tick() {
            if (savedCallback && savedCallback.current) {
                savedCallback.current();
            };
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}