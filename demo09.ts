// 类的概念和使用
class Lady{
  content ="Hi,帅哥";
  sayHello(){
    return this.content;
  }
}
class XiaoJieJie extends Lady {
  sayLove(){
    return 'I love you.'
  }
  // 类的重写
  sayHello(){
    // return 'Hi Honey.'
    // super 关键字能在子类中拿到父类的方法
    return super.sayHello()+',Honey.';
  }
}
// 1.Lady 是 XiaoJieJie的父类，XiaoJieJie是Lady的子类；
const bluegree =new XiaoJieJie();
console.log(bluegree.sayHello());
console.log(bluegree.sayLove());

// 类的三种访问类型：private protected public
// 1.类的内部和外部
// 2.public：允许类的内部和外部都可以调用到；
// 3.private:私有的，只允许在类的内部使用；
// 4.protected:受保护的，允许在类的内部使用；在继承的时候，允许在类的外部使用；
class Person{
 public name:string;
 private age:number;
 protected hobbies:string;
 public sayHello(){
   console.log(this.name+'hello');
   this.age=18;
   console.log("内部"+this.name+this.age);
 }
}
class Teacher extends Person{
  public sayBye(){
    console.log(this.name,"name_public");
    // this.age=19;
    // console.log(this.age,"age_private");
    this.hobbies="踢毽子"
    console.log(this.hobbies,"hobbies_protected");
  }
}
const person=new Person();
const person2=new Teacher();
person.name="还珠格格";
person2.name="紫薇格格";
person.sayHello();
console.log(person.name);
person2.sayBye();


// 类的构造函数
// 1.new 出对象时constructor自动执行；
// 2.当子类写构造函数时，必加super(),用来调用父类的构造函数;
class Dog {
  // public name :string;
  // constructor (name:string){
  //   this.name=name;
  // }
  // 简单写法
  constructor(public name:string){
  }
}
class PetDog extends Dog{
  // 当子类写构造函数时，必加super();
  constructor (public age:number){
    super("傻子");
  }
}
const dog1=new Dog("哈士奇");
console.log(dog1.name);
const pet1=new PetDog(3);
console.log("pet",pet1.name,pet1.age);




