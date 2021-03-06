const object = {
    value: '42',
    print () {
      _this = this;
      function type() {
        return typeof _this.value;
      }
      
      console.log(`${this.value} is ${type()}`);
    }
  }
  
  object.print(); // Поправить замыкание

  //Проблему можно решить разными способами. Например, использовать стрелочные функции без контекста или сохранить ссылку на this в переменную that (self) и использовать ее.
  //Позже вы научитесь явно передавать контекст в функции методами call и apply
  //В примере на каждый вызов метода print() создается внутренняя функция type(). В реальном коде правильное решение - просто вынести функцию type на уровень переменной obj