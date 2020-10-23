// 函数参数和返回值类型的注解
// 1.返回值只能是数字类型
function getTotal(one:number,two:number):number{
  return one + two;
}
const total =getTotal(1,3);
// 2.没有返回值
function sayHello():void {
 console.log('Hello World');  
}
// 3.抛出异常||死循环
function errorFunctiong():never{
  throw new Error();
  console.log('Hello World');
}
// 4.函数参数是一个对象
function add({one,two}:{one:number,two:number}) {
  return one+two;
}
const total2 = add({one:1,two:2});

function getNumber({one}:{one:number}) {
  return one;
}
const one=getNumber({one:1})