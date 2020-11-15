const { log } = console;
class Link {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let link = new Link(1, new Link(2, new Link(3)));
while (link != null) {
  log(link.value);
  link = link.next;
}

let obj = {
  name: "ls",
  children: {
    name: "zs",
  },
};
let child = {
  ...obj,
};
child.children.name = "zs2";
log(obj);
function touch(x) {
  if (x == 2) throw new Error("hard break");
}
// 迭代函数
function foo2(x = 5) {
  return {
    next: () => {
      touch(x); // some process methods
      return { done: !x, value: x && x-- };
    },
  };
}
// 示例
// let x = new Object();
// x[Symbol.iterator] = foo2; // default `x` is
// function* fn() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return 1;
// }
// let generator1 = fn();

// console.log(generator1.next());
