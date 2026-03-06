import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, className = '', style }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.05 });
    const [forceVisible, setForceVisible] = useState(false);

    // Fallback: force visibility after timeout in case IntersectionObserver fails
    useEffect(() => {
        const timer = setTimeout(() => setForceVisible(true), 1500 + delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    const shouldShow = isInView || forceVisible;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: shouldShow && !forceVisible ? delay : 0, ease: [0.17, 0.55, 0.55, 1] }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
