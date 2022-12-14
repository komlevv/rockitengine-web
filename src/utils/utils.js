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
export const getExtension = (str) => str.substring(str.lastIndexOf('.') + 1);

// const hex = [...Array(256).keys()].map((index) => index.toString(16).padStart(2, '0'));
// export const uuid = () => {
//   /* eslint-disable no-bitwise */
//   const randomValues = crypto.getRandomValues(new Uint8Array(16));
//   randomValues[6] = (randomValues[6] & 0x0f) | 0x40;
//   randomValues[8] = (randomValues[8] & 0x3f) | 0x80;
//   return [...randomValues.entries()]
//     .map(([index, int]) => ([4, 6, 8, 10].includes(index) ? `-${hex[int]}` : hex[int]))
//     .join('');
//   /* eslint-enable */
// };

// helpers for React SSR
export const canUseDOM = () =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement);
export const canUseEventListeners = () => canUseDOM() && !!window.addEventListener;
export const canUseViewport = () => canUseDOM() && !!window.screen;

export const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
