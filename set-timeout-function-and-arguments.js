const fun1 = (param1, param2) => {
    console.log(param1 + ' rocks!' + param2);
};

setTimeout(fun1, 2000, 'Node', ' and you?'); //third and onwards arguments will act as parameters to the function above