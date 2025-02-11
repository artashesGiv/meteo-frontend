import { memo } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

export type TransitionBaseProps = DefaultPropsWithChildren<{
  isVisible: boolean;
  duration?: number;
  keyProp?: string | number;
}>;

export const TransitionBase = memo<TransitionBaseProps>(props => {
  const { isVisible, keyProp, duration = 0.3, children } = props;

  return (
    <AnimatePresence mode='wait'>
      {isVisible && (
        <motion.div
          key={keyProp}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

TransitionBase.displayName = 'TransitionBase';
