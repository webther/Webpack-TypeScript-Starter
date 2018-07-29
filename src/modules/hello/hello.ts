import * as _ from 'lodash';

class Hello {
  sayHello(name: string = 'World') {
    return `Hello ${name}!`;
  }

  greeting(date: any = new Date()) {
    if (!_.isDate(date)) {
      return '';
    }

    let curHr = date.getHours();

    if (curHr < 12) {
      return 'Good morning!';
    }
    else if (curHr < 18) {
      return 'Good afternoon!';
    }
    else if (curHr < 24) {
      return 'Good evening!';
    }
    else {
      return '';
    }
  }
}

export { Hello };
