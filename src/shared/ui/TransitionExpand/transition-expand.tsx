import { memo, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

export type TransitionExpandProps = DefaultPropsWithChildren<{
  duration?: number;
}>;

export const TransitionExpand = memo<TransitionExpandProps>(props => {
  const { children, duration = 0.3 } = props;

  const { ref, height, isVisible } = useAutoHeight();

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height, opacity: Number(isVisible) }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        height: { duration },
        opacity: { duration, delay: duration / 2 },
      }}
      style={{ overflow: 'hidden' }}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
});

TransitionExpand.displayName = 'TransitionExpand';

export const useAutoHeight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      if (element.scrollHeight > 0) {
        setHeight(element.scrollHeight);
        setIsVisible(true);
      } else {
        setHeight(0);
        setIsVisible(false);
      }
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  return { ref, height, isVisible };
};
