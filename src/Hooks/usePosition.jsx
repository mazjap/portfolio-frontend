import { useState, useEffect, useCallback, useRef } from 'react';

const usePosition = (externalRef) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const ref = useRef(null);

    const calculatePosition = useCallback(() => {
        const targetRef = externalRef || ref;
        if (targetRef.current !== null) {
            const rect = targetRef.current.getBoundingClientRect();
            setPosition({
                top: rect.top + window.scrollY - targetRef.current.offsetHeight,
                left: rect.left + window.scrollX - targetRef.current.offsetWidth / 2 + rect.width / 2,
            });
        }
    }, [externalRef]);

    useEffect(() => {
        calculatePosition();
        window.addEventListener('resize', calculatePosition);
        return () => window.removeEventListener('resize', calculatePosition);
    }, [calculatePosition]);

    return [position, ref];
};

export default usePosition;