import { Hello } from './modules/hello/hello';
import './app.scss';

let hello = new Hello();
console.log(hello.sayHello());
console.log(hello.greeting());