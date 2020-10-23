// 基础静态类型：
//number,string, null,undefinde,boolean,void,symbol
const age:number=1;
const myname:string='xiaohong';

// 对象静态类型（包含以下4种类型）
// 1.基本对象类型
const XiaoHong:{
  name:string,
  age:number
}={
  name:'小红',
  age:13
}
// 2.数组类型
const Nvstrtongxue:string[]=['小明','落英','小刘'];
// 3.类类型
class Person{};
const JacksonYee:Person=new Person();
// 4.函数类型
const DoSomething:()=>string=()=>{
  return '张女士'
}
