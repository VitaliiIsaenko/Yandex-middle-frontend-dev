function zip() {
    const args = [...arguments];
  
    let result = {};
    for (const obj of args) {
        for (const [key,field] of Object.entries(obj)) {
          if (!(key in result)) {
          result[key] = field;
          }
        }
    }
    return result;
  }
  
  const obj1 = {
    a : 2,
    b : 3
  }
  
  const obj2 = {
    b : 4,
    c : 5
  }
  
  console.log(zip(obj1,obj2))