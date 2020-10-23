// 数组类型注解的方法
const numberArr=[1,2,3];//类型推断
const numberArr02 :number[]=[1,2,3];//类型注释
const stringArr :string[]=['a','b','c'];
const undefinedArr :undefined[]=[undefined,undefined];

// 混合元素的数组
const arr:(number | string | undefined)[]=[1,'string',undefined]
// type alias 类型别名
type Lady={name:string,age:number};
const person:Lady[]=[
  {name:"大熊",age:1},
  {name:"小熊",age:2}
]
class Madam{
  name:string;
  age:number
}
const person02:Madam[]=[
  {name:"大白",age:3},
  {name:"小白",age:4}
]