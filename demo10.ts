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

// 只读属性的使用
class dogAAAA{
  public readonly _name:string
  constructor(name:string){
    this._name=name;
  };
}
const mydog=new dogAAAA("小黑");
// mydog._name="小红";
console.log(mydog._name);

// 抽象类：继承的子类里面必须有skill方法，且业务逻辑是不同的。
abstract class Leader{
  abstract skill()
}
class waiter1 extends Leader{
  skill(){
    console.log("我是waiter1");
  }
}
class waiter2 extends Leader{
  skill(){
    console.log("我是waiter2");
  }

}
class waiter3 extends Leader{
  skill(){
    console.log("我是waiter3");
  }
}

