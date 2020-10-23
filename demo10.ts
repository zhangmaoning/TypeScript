class Ms{
  constructor(private _age:number){}
  get age(){
    return this._age-10;
  }
  set age(age:number){
     this._age=age+5;
  }
}
const chunHua =new Ms(18);
chunHua.age=25;
console.log(chunHua.age);

// static 静态类
// 1.可以不用new出来一个实例；
// 2.通过static将方法
class Girl{
 static sayLove(){
    return 'I love you.'
  }
}
// const xiaHua=new Girl();
// console.log(xiaHua.sayLove());
console.log(Girl.sayLove());
// 抽象类和只读属性的使用


