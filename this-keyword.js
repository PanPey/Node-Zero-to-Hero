// "this" here is "exports" -- this represents the current class object

this.id = "123";
this.name = "Josh";

const testerObj = {
    func1: function(){
        console.log('func1', this);
    },

    func2: () => {
        console.log('func2', this);
    } 
};

testerObj.func1();
testerObj.func2();