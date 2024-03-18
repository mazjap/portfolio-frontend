import { useState, useEffect, useCallback, useRef } from 'react';

const usePosition = (externalRef) => {
    const [position, setPosition] = useState({ bottom: 0, left: 0 });
    const ref = useRef(null);

    const calculatePosition = useCallback(node => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        setPosition({
            bottom: window.innerHeight - rect.bottom,
            left: rect.left + window.scrollX
        });
    }, []);

    useEffect(() => {
        const getCurrentPosition = () => calculatePosition((externalRef ?? ref).current);
        getCurrentPosition();
        window.addEventListener('resize', getCurrentPosition);
        return () => window.removeEventListener('resize', getCurrentPosition);
    }, [calculatePosition, externalRef, ref]);

    return [position, ref];
};

export default usePosition;