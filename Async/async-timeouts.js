function foo(callback) {
  setTimeout(function () {
    callback("A");
  }, Math.random() * 100);
}

function bar(callback) {
  setTimeout(function () {
    callback("B");
  }, Math.random() * 100);
}

function baz(callback) {
  setTimeout(function () {
    callback("C");
  }, Math.random() * 100);
}

foo(function (letter) {
  bar(function (letter) {
    baz(function (letter) {
      console.log(letter);
    });
    console.log(letter);
  });
  console.log(letter);
});

// foo(console.log);
// bar(console.log);
// baz(console.log);

// A
// B
// С
