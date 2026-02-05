// create 1 java object , prop1 = some string , prop2 = some number , write a function there show obj1 
var obj1 = {
    props1: "This is a string",
    props2: 42,
    showObj1: function() {
        console.log("props1: " + this.props1);
        console.log("props2: " + this.props2);
    }
};
obj1.showObj1();


function fun2(){
    console.log("this.props1: " + this.props1 + ", this.props2: " + this.props2);

}
fun2.call(obj1);
fun2.apply(obj1);
