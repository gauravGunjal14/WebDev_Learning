let obj = {}

obj.name = "gaurav";
// key value writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

Object.defineProperty(obj, 'name', {
    value:"gaurav",
    writable:true, // if true then its allow to change value, like name
    enumerable:true, // if true then it allow to print value, like here name. else it cant print it
    configurable:true, //if true then its allow to change writable and enumerable
})