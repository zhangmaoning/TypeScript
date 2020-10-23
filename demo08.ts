// interface 接口
// const screenResume=(name:string,age:number,bust:number)=>{
//   age <24 && bust >= 90 && console.log(name+'进入面试');
//   age >= 24 || bust < 90 && console.log(name + '你被淘汰')
// };
// const getResume=(name:string,age:number,bust:number)=>{
//   console.log(name+'年龄是'+age);
//   console.log(name+'身高是'+bust);
// }
// screenResume('小红',19,98);
// getResume('小红',19,98);

// 使用interface进行优化
interface Girl {
  name:string;
  age:number;
  bust:number;
  waistline ?:number;//一个可有可无的值
  [propname:string]:any;//key:任意字符串；value：任意类型的值
  say():string
}
const girl={
  name:'小红',
  age:18,
  bust:98,
  waistline:100,
  sex:1,
  say(){
    return "欢迎光临~~~"
  },
  teach(){
    return "我是教英语的"
  }
}
const screenResume=(girl:Girl)=>{
  girl.age <24 && girl.bust >= 90 && console.log(girl.name+'进入面试');
  girl.age >= 24 ||girl.bust < 90 && console.log(girl.name + '你被淘汰')
};
const getResume=(girl:Girl)=>{
  console.log(girl.name+'年龄是'+girl.age);
  console.log(girl.name+'身高是'+girl.bust);
  girl.waistline && console.log(girl.name+'腰围是'+girl.waistline);
  girl.sex ? console.log(girl.name+'是女孩'):console.log(girl.name+'是男孩');
  console.log(girl.say());
  
}
screenResume(girl);
getResume(girl);
// 类
class XiaoJieJie implements Girl{
  name="水冰月"
  age=19
  bust=90
  say(){
    return "代表月亮消灭你"
  }
}
// 继承
interface Teacher extends Girl{
  teach():string;
}
const getResumeTeacher=(girl:Teacher)=>{
  console.log(girl.name+'年龄是'+girl.age);
  console.log(girl.name+'身高是'+girl.bust);
  girl.waistline && console.log(girl.name+'腰围是'+girl.waistline);
  girl.sex ? console.log(girl.name+'是女孩'):console.log(girl.name+'是男孩');
  console.log(girl.say());
  console.log(girl.teach());
}
getResumeTeacher(girl);