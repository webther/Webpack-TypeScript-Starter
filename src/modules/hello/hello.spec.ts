import { Hello } from './hello';

test('The sayHello() with empty name argument.', () => {
  let hello = new Hello();
  expect(hello.sayHello()).toBe('Hello World!');
});

test('The sayHello() with assigned name argument.', () => {
  let hello = new Hello();
  expect(hello.sayHello('Jay')).toBe('Hello Jay!');
});

test('The greeting() with empty name argument.', () => {
  let hello = new Hello();
  let date = new Date();
  let curHr = date.getHours();
  let greeting = '';

  if (curHr < 12) {
    greeting = 'Good morning!';
  }
  else if (curHr < 18) {
    greeting = 'Good afternoon!';
  }
  else {
    greeting = 'Good evening!';
  }

  expect(hello.greeting()).toBe(greeting);
});

test('The greeting() with assigned name argument.', () => {
  let hello = new Hello();

  expect(hello.greeting({})).toBe('');
  expect(hello.greeting('hello')).toBe('');
  expect(hello.greeting(new Date('2018-07-01T99:99:99'))).toBe('');

  expect(hello.greeting(new Date('2018-07-01T00:00:00'))).toBe('Good morning!');
  expect(hello.greeting(new Date('2018-07-01T12:00:00'))).toBe('Good afternoon!');
  expect(hello.greeting(new Date('2018-07-01T18:00:00'))).toBe('Good evening!');
});