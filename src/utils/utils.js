import React from 'react';

export const throttle = (func, timeFrame) => {
  let lastTime = 0;
  return (...args) => {
    const now = new Date();
    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
};

export const randomChoice = (number) => Math.floor(Math.random() * number);

export const mapContentWithRefs = (content, refsArr) =>
  // map content, dynamically setting innerRef prop
  content.map((component, i) => {
    const k = i + 1000;
    return React.cloneElement(component, { innerRef: refsArr[i], key: k });
  });
