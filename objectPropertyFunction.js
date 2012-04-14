var funcCount = 0;

function newFunc() {
    return this.number;
}

function addFunc(addProp) {
    addProp.newFunc = newFunc;
    addProp.number = funcCount;
    funcCount++;
    return addProp;
}

var foo = {};
var bar = {};

foo = addFunc(foo);
bar = addFunc(bar);

alert('Foo ' + foo.newFunc());
alert('Bar ' + bar.newFunc());
alert('Foo ' + foo.newFunc());