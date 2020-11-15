const getOne = canGetCount(2);

//getOne()  // yes
//getOne()  // yes
//getOne()  // no

function canGetCount(number) {
  let invoked = 0;
  return () => { 
    invoked++;
    return invoked > number ? "no" : "yes";
   };
}


console.log(getOne())  // yes
console.log(getOne())  // yes
console.log(getOne())  // no
