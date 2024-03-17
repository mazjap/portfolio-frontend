import { useState, useEffect, useRef } from 'react';

function useSize() {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const ref = useRef(null);

    useEffect(() => {
        const observeTarget = ref.current;
        if (!observeTarget) return;

        const resizeObserver = new ResizeObserver(entries => {
            if (!Array.isArray(entries) || !entries.length) return;
            
            const entry = entries[0];
            console.log('Size:', entry.contentRect.width, entry.contentRect.height);
            setSize({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
            });
        });

        resizeObserver.observe(observeTarget);

        return () => resizeObserver.unobserve(observeTarget);
    }, []);

    return [size, ref];
}

export default useSize;