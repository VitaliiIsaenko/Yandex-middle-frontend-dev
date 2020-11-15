const object = (function(){
    let _value = null;
    return {
      getValue () {
      return _value;
    },
    setValue (value) {
      _value = value;
    }
    }
  })();
  
  object.setValue(42);
  object._value = 73; // изменили напрямую приватное свойство, а не должны уметь обращаться к нему
  object.getValue(); // 73
  console.log(object.getValue());
  
  /*
  Ожидание
  object.setValue(42);
  object._value = 73; // изменили напрямую приватное свойство
  object.getValue(); // 42
  */
  
  const obj = (function () {
      let __private = null;