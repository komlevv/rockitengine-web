import { createRef, useEffect } from 'react';

export const useIntersectionObserver = (handler, options) => {
  const elRef = createRef();
  useEffect(() => {
    const observer = new IntersectionObserver(handler, options);
    if (elRef.current) observer.observe(elRef.current);
    return () => elRef.current && observer.unobserve(elRef.current);
  }, []);
  return elRef;
};
