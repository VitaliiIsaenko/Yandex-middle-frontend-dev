Number.prototype.plus = function(num) {
    return Number(this.valueOf() + num);
  };
Number.prototype.minus = function(num) {
    return Number(this.valueOf() - num);
};
(2).plus(3).minus(1) // 4
