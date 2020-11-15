// аналог lodash.invert
// { a: 1 } => { 1: 'a' }

function invert(obj) {
    const result = {};
      for (const [key, value] of Object.entries(obj)) {
        result[value] = key;
      }
  return result;
  }
  
  const testObj = {
    a:1,
    b:2
  }
  
  console.log(invert(testObj))
  

  //the shortest BUT NOT ONPTIMAL (since result object would be recreated on every step):
  function invertShortest(obj) {
      return Object.entries(obj)
      .reduce((acc, [key,item])=>({...acc, [item]:key}), {});
  }

  function invertBest(obj) {
      return Object
      .entries(obj)
      .reduce((acc, [key,item])=>{
          acc[item] = key;
          return acc;
      },{});
  }