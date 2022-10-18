import React, { createRef, useEffect, useRef, Children, useId } from 'react';
import s from './Animate.scss';
import { randomChoice } from '../../utils/utils';

const transitionBaseClasses = [s.animateBase, s.animateBaseA, s.animateBaseB];

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(s.animateFadeIn);
      observer.unobserve(entry.target); // unobserve after intersect
    }
  });
};

const cloneWithRefs = (children, refsArr, baseId) => {
  console.assert(Array.isArray(children), { children }, 'Children should be an Array');
  if (children.length < 1) {
    console.warn(`Children can't be empty. ${children}`);
    return undefined;
  }
  if (children.length === 1)
    return React.cloneElement(children[0], {
      animationRef: refsArr[0],
      key: `${baseId}-0`,
    });
  return children.flat(1).map((child, i) => {
    if (!React.isValidElement(child)) {
      const childType = Object.prototype.toString.call(child);
      console.warn(`"${child}" is not a valid input of type "${childType}", skipping`);
      return child;
    }
    return React.cloneElement(child, { animationRef: refsArr[i], key: `${baseId}-${i}` });
  });
};

const Animate = ({ children }) => {
  const id = useId();
  const childrenCount = Children.count(children);

  let refsArr = useRef([]).current; // create persistent refs array
  Array.from(Array(childrenCount)).forEach(() => {
    refsArr = [...refsArr, createRef()]; // populate array with ref objects
  });

  useEffect(() => {
    refsArr.forEach((el) => {
      if (el.current) {
        // skip if el.current is null
        el.current.classList.add(transitionBaseClasses[randomChoice(transitionBaseClasses.length)]);
      }
    });
    const options = { root: null, rootMargin: '0px', threshold: 0 };
    const observer = new IntersectionObserver(handleIntersect, options);
    refsArr.forEach((el) => el.current && observer.observe(el.current));
    return () => {
      refsArr.forEach((el) => {
        if (el.current) observer.unobserve(el.current);
      });
    };
  }, []);
  return <>{cloneWithRefs(children, refsArr, id)}</>;
};

export default Animate;
