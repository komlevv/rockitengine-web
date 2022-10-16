import React, { Children } from 'react';
import { useAnimateRefs } from '../../hooks/useAnimateRefs';

const mapWithRefs = (content, refsArr) => {
  if (content.length <= 1) {
    return undefined;
  }
  return content.flat(1).map((component, i) => {
    if (!React.isValidElement(component)) {
      console.warn(`"${component}" is not a valid input of type "${typeof component}", skipping`);
      return component;
    }
    const k = i + 1000;
    return React.cloneElement(component, { animationRef: refsArr[i], key: k });
  });
};

const Animate = ({ children }) => {
  const animationRefs = useAnimateRefs(Children.count(children));
  return <>{mapWithRefs(children, animationRefs)}</>;
};

export default Animate;
