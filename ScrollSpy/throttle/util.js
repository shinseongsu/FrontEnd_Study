export const throttle = (func, delay) => {
    let throtled = false;
    return (...args) => {
        if(!throtled) {
            throtled = true;
            setTimeout(() => {
                func(...args);
                throtled = false;
            }, delay);
        }
    }
}

export const debounce = (func, delay) => {
    let timeoutId = null;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func.bind(null, ...args), delay);
    }
}