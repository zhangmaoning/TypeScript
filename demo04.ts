// type annotation 类型注解
// 自己手动指定变量的类型；
let count:number;
count =123;
// type inference 类型推断
// 如果没有明确的指定类型，那么 TypeScript 
// 会依照类型推论（Type Inference）的规则推断出一个类型
let countInference=123;

// 当变量显示为any时，需要标明类型注解
function getTotal(one:number,two:number) {
  return one + two;
}
const total =getTotal(1,3);
const XiaoPengYou={
  name:"易烊千玺",
  age:14
}