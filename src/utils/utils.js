export const throttle = (func, timeFrame) => {
    let lastTime = 0;
    return (...args) => {
        const now = new Date();
        if (now - lastTime >= timeFrame) {
            func(...args);
            lastTime = now;
        }
    };
}


export const randomChoice = number => {
    return Math.floor(Math.random() * number)
}
