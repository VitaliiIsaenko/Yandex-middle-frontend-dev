function Book() {
    this.name = 'foo';
}

Book.prototype = {
    getName: function() {
            return this.name;
     }
}

var book = new Book();

Book.prototype.getUpperName = function(){
 return this.getName().toUpperCase();
};

// В этой строке определить метод getUpperName

console.log(book.getUpperName()); // 'FOO'