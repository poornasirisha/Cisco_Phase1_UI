const add = (a,b) => a + b;
const subtract = (a,b) => a-b;

export {add, subtract}; //named export
export default add; //default export


//How do we import
import {add, subtract} from '';
import add from '';