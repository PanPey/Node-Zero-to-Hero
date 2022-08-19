const fun = (param1) => {
    console.log('hello after' + param1 + 'seconds');
};

setTimeout(fun, 4000, 4);
setTimeout(fun, 8000, 8);
