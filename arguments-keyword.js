function dynamicArgsFunction(){
    console.log(arguments);
}

dynamicArgsFunction(3,7,5,4,-2);

// o/p: [Arguments] { '0': 3, '1': 7, '2': 5, '3': 4, '4': -2 }