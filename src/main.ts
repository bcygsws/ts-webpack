import './ts_learn/13-抽象类.ts';
import './ts_learn/14-ts中的函数和函数类型.ts';
import './ts_learn/15-ts中的可选参数和默认参数.ts';
import './ts_learn/16-剩余参数.ts';
import './ts_learn/17-函数重载.ts';
import './ts_learn/18-泛型.ts';
import './ts_learn/19-泛型接口.ts';
console.log(123);
document.write('哈哈哈，我又变帅了');
// 一、数据类型
// 1.1 undefined和null基本类型
// 总结：undefined和null可以作为其他基本类型的子类型。在非严格模式下(tsconfig.json文件中配置：strict:false),
// undefined和null可以赋值给其他类型的变量
let num: number = undefined;
let str: string = null;
console.log(num);// undefined
console.log(str);// null
// 1.2 数组类型
// 定义数组的三种方式字面量、new实例化Array和泛型的方式
// 1.2.1 字面量的方式，很简单，不赘述
// 1.2.2 new Array()的方式
let num1: number[] = new Array(1, 234, 56, 8);
console.log(num1);
// 1.2.3 泛型的方式
let num2: Array<number> = [1, 24556, 56, 7, 8];
console.log(num2);
// 1.3 元组类型的好处:上面定义的数组，数组的元素必须是类型注解声明的类型，否则代码报错，而元组类型，
// 相当于给数组中的每个元素分别提供类型注解
// 元组类型，可以定义数组中含不同类型元素的数组
// 个人理解，元组类型，相当于解构，或者说ts接口
let num3: [string, number, boolean] = ["张无忌", 45, false];
console.log(num3);
// 1.4 枚举的使用场景：当变量的值是一个或者那么几个时，使用枚举类型
// 枚举默认是数字枚举，当给它赋值字符串时，就叫做字符串枚举
enum Player {
  Male,
  Female
};
// 默认是数字枚举
let player = Player.Male;
console.log(player);// 0
let player1 = Player.Female;
console.log(player1);// 1
// 也可以像数组一样，根据Person[index]来拿到枚举的那个元素
console.log(Player[0]);// Male
console.log(Player[1]);// Female
// 数字枚举其取值的规律：
// 1.都不写默认值，从0开始，取连续的整数
// 2.第n个元素，设置了默认值=m，从第n个元素开始，后面依次为m+1,m+2……。第n个元素以前的元素，从默认0开始
// 3.当枚举中的元素有一个赋值为字符串了，其他元素也必须赋值字符串，否则报错；Enum member must have initializer.
// 这和数字枚举不一样
enum Person {
  Man = 'man',
  Woman = "woman"
};
let m = Person.Man;
console.log(m);// man
let w = Person.Woman;
console.log(w);// woman
// 1.5 any类型，当我们想为某个变量添加一个类型，但在编译阶段还不知道它的具体类型，可以使用any定义类型
// 对比前面，讲解数组时的元组类型的写法，简单的多
let arr1: [string, number, boolean] = ["陆小凤", 134, false];
console.log(arr1);
let arr2: any = ["陆小凤", 134, false];
console.log(arr2);
console.log(arr2[0]);
// 1.6 void空类型，接收一个undefined值，但意义不大
let vd: void = undefined;
console.log(vd);// undefined
// 1.7 联合类型，取值的时候为多种类型中的一种
// 案例：定义一个函数，得到它的字符串形式
// 情形一：可以正常输出，不报错
// function getStr(val: number | string): string {
//   return val.toString().length;
// }
// console.log(getStr(123));// 输出字符串123
// 情形二：报错 
// 类型“string | number”上不存在属性“length”。
// 类型“number”上不存在属性“length”。ts(2339)
// function getStr(val: number | string): string {
//   if (val.length) {
//     return val;
//   } else {
//     return val.toString();
//   }
// }
// 情形三：类型断言解决这个问题
// 3.1 类型断言的两种方式：尖括号和as的方式，在tsx文件中，只能使用as的方式进行类型断言
// val:number|string 可知val是number和string的联合类型，就是因为联合类型，调用length属性的时候，才需要手动类型断言
function getStr(val: number | string): number {
  // 尖括号，把类型括起来:<string>val
  if ((<string>val).length) {
    // return (<string>val).length;
    // 使用as来进行类型断言，程序员断言它是字符串了，直接调用length属性即可
    return (val as string).length;
  } else {
    // val为数字，需要先调用toString()转换成字符串
    return val.toString().length;
  }
}
console.log(getStr(123));// 3
console.log(getStr('abcdefg'));// 7
// 四、接口
// 接口是为对象订立的一种约束，它其实是一种类型
interface IUser {
  id: number;
  name: string;
  sex: string;
  isStudent: boolean;
}
let user: IUser = {
  id: 12,
  name: '张衡',
  sex: '男',
  isStudent: true
};
console.log(user);// {id: 12, name: '张衡', sex: '男', isStudent: true}
console.log(user.id);// 12
console.log(user.sex);// 男
// 4.1 验证声明接口后，对象的属性是否可读可写？默认是可读可写的
user.id = 1234;
console.log(user);// {id: 1234, name: '张衡', sex: '男', isStudent: true}
console.log(user.id);// 1234
// 4.2 声明接口后，对象中的属性，如何设定为只读呢？语法：在接口对象的键前面加上readonly,将限制该属性为只读的
// a.只读的语法：readonly id:number;
// b.可有可无的，语法：id?:number;
interface IUser1 {
  readonly id: number;
  name: string;
  sex: string;
  isStudent?: boolean;
}
// 可选的属性，?isStudent
// isStudent: boolean;
let user1: IUser1 = {
  id: 15,
  name: '张晓红',
  sex: '女',
  isStudent: false
};
console.log(user1.id);
// user1.id = 145;// Error: 无法分配到 "id" ，因为它是只读属性。
// console.log(user1.id);
// 4.3 可选属性，在接口中键的前面加一个? 问号表示后面自定义该接口类型的对象时，这个属性是可选的，即这个键可有可无
// 4.4 为了使接口表示一个函数类型，需要为接口定义一个函数签名（实际上就是赋值等式的方式定义函数）
// 接口实现的功能，是判断sub子串是否在源字符串source中
interface IGetSubStr {
  (source: string, sub: string): boolean;
}
// 接口就用作了函数的类型
const getSubStr: IGetSubStr = function (source: string, sub: string): boolean {
  // 原本serach方法要传入正则表达式，但是如果传入的不是正则表达式，内部会通过new RegExp(sub)隐式地转换成正则表达式
  // 2.search方法的返回值：满足，返回的是符合正则的表达式的首个字符的索引；不满足返回-1
  return source.search(sub) > -1;
}
console.log(getSubStr('abcdef', 'de'));// true
// mdn查看string的search用法
// 语法：str.search(正则表达式)
// 返回值：返回满足正则的首个字符的索引，如果不满足返回-1
// 注意：如果括号里传入的不是正则表达式，那么内部会通过new RegExp()隐式的转换成正则表达式
// 链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search
// 注意：\s 表示空格、换页符、制表符号 \n\t\f\r\v  \w Unicode字符，等价于[a-zA-Z0-9_] 是字符、数字和下划线组成的
const para = "I love zhagnsafgaq.Please go out!";
// 如下reg含义：表示非\s 非\w的字符，这里最先满足的就是句号 .
let reg = /[^\s\w]/;
console.log(para.search(reg));// 18

// 五、类实现接口
/**
 * 
 * @ ts中类实现接口
 * 1. ts类中实现接口，使用关键字implements,类似java
 * 2. ts中类可以实现多个接口，java中也是如此，java中也是使用接口来解决java类不能多继承的问题
 * 3. 接口中只有函数名称和参数列表，没有函数实现
 * 4. 接口也是可以继承的，接口继承另外一个接口，使用extends关键字；类比：在java中，接口是一种特殊的抽象类，抽象类仍然
 * 是类，是类就可以继承
 * 
 * 
 * 
 * 
 */
(() => {
  // 定义一个接口
  interface IFly {
    fly();
  };
  // 定义一个实现IFly接口的类
  class Person implements IFly {
    // 实现了接口IFly，就必须重写接口中的方法
    fly() {
      console.log("Person张红会飞");
    }

  }
  const per = new Person();
  per.fly();
  // 在java中，接口是为了解决java不能多继承的问题，java中一个类只能有一个父类，但是这个类可以实现多个接口
  interface ISwim {
    swim();
  }
  class Dog implements ISwim, IFly {
    swim() {
      console.log('Dog会游泳~');
    }
    fly() {
      console.log('Dog箭一般窜出去');
    }
  }
  const dog = new Dog();
  dog.swim();
  dog.fly();
})();

// 六、类
// 类是一个模板，用来实例化对象的，与java不同的是，类成员要单独声明，java中构造函数中this.name=name;this.后面的name
// 不用单独声明，但是ts中需要声明
(() => {
  // ts中的类
  class Cat {
    // 在this中声明message属性
    message: string;
    constructor(message: string = "小猫很乖啊~") {// message也可以传入一个默认值
      this.message = message;
    }
    sendMessage() {
      console.log('小红给我发的信息内容：' + this.message);
    }
  }
  const cat = new Cat('那只棕色毛的猫生病了~');
  cat.sendMessage();//  小红给我发的信息内容：那只棕色毛的猫生病了~
  const cat1 = new Cat();
  cat1.sendMessage();
}
)();
// 七、类的继承
(() => {
  // 类的继承
  // 某个类的不同子类实例对调用同一方法，产生不同的结果，叫做多态
  // A继承B ，那么B叫做父类(基类)，A叫做子类(派生类)
  class Animal {
    name: string;
    age: number;
    gender: string;
    constructor(name: string = "郭靖", age: number = 18, gender: string = "男") {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    // 定义一个实例方法
    sleep() {
      console.log("父类Animal中的sleep方法：" + this.name + "," + this.age + "岁了，" + "是" + this.gender + "的：在睡觉");
    }

    play() {
      console.log('Animal基类中的play方法：' + this.name + this.age + this.gender);
    }
  }
  class Pig extends Animal {
    weight: number;
    constructor(name: string, age: number, gender: string, weight: number) {
      // 注意：构造函数调用super方法，必须在使用this之前，这是ts中的硬性规定
      // 参考文档：https://24kcs.github.io/vue3_study/chapter2/3_class.html#%E7%BB%A7%E6%89%BF
      super(name, age, gender);
      this.weight = weight;
    }
    // 子类Pig重写的sleep方法
    sleep() {
      console.log("Pig子类中的：" + this.name);
    }
    // 子类Pig扩展了父类的方法
    call() {
      console.log("Pig子类中的call方法：" + this.name);
    }
  }
  class Dog extends Animal {
    constructor(name: string, age: number, gender: string) {
      super(name, age, gender);
    }
    sleep() {
      console.log("Dog子类中的：" + this.name);
    }
  }
  class Cat extends Animal {
    constructor(name: string, age: number, gender: string) {
      super(name, age, gender);
    }
    sleep() {
      console.log("Cat子类中的：" + this.name);
    }
  }
  const pig = new Pig('小飞猪', 3, '雌性', 50);
  pig.sleep();
  pig.play(); // 虽然子类中没有重写play方法，但是子类仍然可以调用这个方法，play方法中的this仍然是子类
  const animal = new Animal('张三丰', 105, '男');
  animal.sleep();
  console.log('--------------');
  const pg: Animal = new Pig('猪猪侠', 5, '雄性', 15);
  pg.sleep();
  const dg: Animal = new Dog('机器狗', 1, '雌性');
  dg.sleep();
  const ct: Animal = new Cat('大脸猫', 2, '雄性');
  ct.sleep();
  console.log('--------------');
  // 八、多态；父类型的引用指向了子类型的实例，不同类型的对象针对相同的方法，产生不同的行为
  // 如果子类型没有扩展方法，可以让子类型的引用指向父类型的实例
  // 如果子类型扩展了方法，不能让子类型的引用指向父类型的实例（子类定义了父类中没有的方法，子类型引用不能指向父类型的实例了）
  const myPig = new Animal();
  myPig.sleep();// 父类Animal中的sleep方法：郭靖,18岁了，是男的：在睡觉
  // myPig.call()// 报错：TS2339: Property 'call' does not exist on type 'Animal'.
  console.log('--------------');
  function showUseSleep(obj: Animal): void {
    obj.sleep();
  }
  showUseSleep(pg);
  showUseSleep(dg);
  showUseSleep(ct);
  console.log('--------------');
  console.log('------------类成员的修饰符---------');
  /**
   * 
   * @ 类成员 类的成员方法和成员属性，ts中不写修饰符，类成员默认为public
   * public修饰的类成员 所有类都可以访问
   * private修饰的类成员 只有当前类可以访问
   * protected修饰的类成员 当前类和其子类可以访问(Java中protected修饰符，当前类和其子类,这个子类可以在当前包，也可以在
   * 其他包，而default的范围比protected小一点，是当前类和当前包中的子类可以访问)
   * 
   * readonly属性修饰符
   * 1.父类中的属性一旦被readonly修饰，实例化，这个属性就不能更改了；而且这个限制，在该类的所有子类中依然生效
   * 2.父类的构造函数中，还是可以进行更改的，这个更改的过程实际上是基于Fish类，创建不同的对象
   * 3.但是在Fish类外面、Fish类以及其子类的非构造函数的方法中，也是不能修改的
   * 4.如果构造函数中没有参数，类中的属性用readonly修饰时，类外部也是不能修改的
   * 5.当readonly修饰构造函数中的参数时，这是参数叫做属性参数或者叫参数属性
   * 6.当readonly修饰构造函数中的某个参数时，例如：name,这个参数会自动绑定到this上，不用额外声明这个属性，这个属性
   * 在类的外面也是不能更改的
   * 例如
   * // readonly修饰了构造器中的name,这个name成为了属性参数，不用额外声明name:string;
   * // name:string;
   * weight:string;
   * constructor(readonly name：string="小甜甜",weight: string){
   *    this.name=name;
   *    this.weight=weight;
   * }
   *  readonly改为public,外部就可以更改了
   *  constructor(readonly name：string="小甜甜",weight: string){
   *    this.name=name;
   *    this.weight=weight;
   * }
   * 
   * 
   */
  class Women {
    age: number;//readonly或public等修饰符，修饰了构造函数中的形参后，这个参数就绑定了类实例上了，不用额外声明
    // 情形1：
    // constructor(readonly name: string, age: number) {
    // 情形2：
    constructor(public name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    learn() {
      console.log(this.name + "酷爱学习");
    }
  }
  class Girl extends Women {
    constructor(name: string, age: number) {
      super(name, age);
    }
    play() {
      console.log(this.name + "在玩沙子");
    }
  }
  const g1 = new Girl('小娟', 16);
  g1.learn();// 小娟酷爱学习
  // 情形1：父类中name使用readonly修饰时，在类的外部，这个属性参数外部可以访问，但是不能修改的
  // g1.name="张小娟";
  // g1.learn();
  // 情形2：父类中的name使用public修饰时，在类的外部，这个属性参数外部也可以访问，是可以修改的
  g1.name = "张小娟";
  g1.learn();// 张小娟酷爱学习
  console.log("-------readonly、public等修饰构造函数的形参，成为属性参数------");
  class Fish {
    // private name: string;// 默认修饰符public
    // public name: string;// 默认修饰符public
    // 父类中的属性一旦被readonly修饰，实例化，这个属性就不能更改了；而且这个限制，在该类的所有子类中依然生效
    readonly name: string;// 默认修饰符public
    weight: string;// 默认修饰符public
    constructor(name: string, weight: string) {
      this.name = name;
      this.weight = weight;
    }
    eat() {// 默认修饰符public
      console.log('Fish父类中的eat方法，我今天吃：' + this.name);
    }
    // public eat() {// 默认修饰符public
    //   console.log('Fish父类中的eat方法，我今天吃：' + this.name);
    // }
    // protected eat() {// 默认修饰符public
    //   console.log('Fish父类中的eat方法，我今天吃：' + this.name);
    // }
    // 报错：属性“eat”为私有属性，只能在类“Fish”中访问。t
    // private eat() {
    //   console.log('Fish父类中的eat方法，我今天吃：' + this.name);
    // }
  }
  class Lianyu extends Fish {
    constructor(name: string, weight: string) {
      super(name, weight);
    }
    play() {
      console.log('Lianyu子类中的play方法：' + this.name);
      // 访问父类中的eat方法，父类Fish中eat的修饰符至少应该是protected
      this.eat();// Fish父类中的eat方法，我今天吃：鲶鱼
      // this.name = "娃娃鱼";// 无法分配到 "name" ，因为它是只读属性。ts(2540)
    }

  }
  // readonly属性修饰符，第2条规则：
  // 属性name被设置成了readonly，readonly属性只会限制当前类和子类的非构造函数成员中，以及当前类的外部的修改，
  // 但是通过new Fish进行不同对象的实例化时(fish,fish1,this.name=name,name 初始化传入“三文鱼”和“鲸鱼”都可以)，
  // 依然是允许的
  const fish = new Fish('三文鱼', '5kg');
  const fish1 = new Fish('鲸鱼', '5000kg');
  console.log(fish);
  fish.eat();
  console.log(fish1);
  fish1.eat();

  // 1.eat方法默认是public的
  // fish.eat();
  // 2.将eat访问改为private，将报错：
  // fish.eat();// 报错：(method) Fish.eat(): void属性“eat”为私有属性，只能在类“Fish”中访问
  // console.log(fish.name);// 属性“name”为私有属性，只能在类“Fish”中访问。ts(2341)
  // 3.将eat改为protected
  // fish.eat();
  // console.log(fish.name);// (property) Fish.name: string属性“name”为私有属性，只能在类“Fish”中访问。
  // 4.readonly修饰符
  console.log(fish);
  console.log(fish.name);
  // fish.name="草鱼";// (property) Fish.name: any无法分配到 "name" ，因为它是只读属性。ts(2540)
  // console.log(fish.name);
  const lianyu = new Lianyu('鲶鱼', '4kg');
  // 测试将Fish父类中的eat方法修饰符改为public和protected
  lianyu.play();
  // lianyu.name="鲢子";// 无法分配到 "name" ，因为它是只读属性。ts(2540)
  console.log(lianyu);
  console.log('------------类成员的修饰符---------------');
  console.log('------------get和set存取器---------------');
  // 十、存取器：可以有效地对类中成员的控制
  // 给出名字和姓氏，拼接成全名，名字和姓氏通过对象初始化时传入
  class GetName {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    // 读取器
    // 相当于对类中定义的属性，进行了一步处理，返回了另外一个属性FullName
    get FullName() {
      console.log('get中……');
      return this.firstName + "-" + this.lastName;
    }
    // 设置器：对get的返回值进行重新修改
    // val监听的是get方法的返回值
    set FullName(val: string) {
      console.log('set中……');
      // 1.将val字符串按照短横线切开，返回一个数组
      let name = val.split('-');
      // 2.从name数组中获取元素值，赋值给firstName和lastName
      this.firstName = name[0];
      this.lastName = name[1];
    }

  }
  // 实例化对象传参
  const getName = new GetName('东方', "不败");
  console.log(getName);// 打印实例对象
  console.log(getName.FullName);// 获取FullName

  const get1 = new GetName('上官', "婉儿");
  console.log(get1);
  console.log(get1.FullName);// get方法执行
  // 1.在GetName类外面对FullName值进行修改；没有书写set方法前，直接修改get1.FullName="诸葛_孔明";将报错：
  // (property) GetName.FullName: any无法分配到 "FullName" ，因为它是只读属性。
  // 2.书写set方法后，FullName就能够修改了
  get1.FullName = "诸葛-孔明";// 这一步操作时，set方法将执行，里面的逻辑会得到新的firstName和lastName的值
  console.log(get1.FullName);// get方法执行
  console.log('------------get和set存取器---------------');
})();
console.log('-------------ts中的静态成员--------------');
// 十一、静态成员
// 静态成员：是ts中通过static关键字修饰的方法和属性，叫做静态方法或者静态属性
// 静态成员的调用方式：类名.静态属性或者类名.静态方法
// 静态属性：name1可读可写

(() => {
  class Person {
    // name1: string;
    static name1: string = "小甜甜";
    age: number;
    constructor(age: number) {
      // name1是静态属性后，name1就不能使用this实例调用了
      // this.name1 = name1;
      this.age = age;
    }
    sayHi() {
      console.log('萨瓦迪卡');
    }
  }
  // 实例化对象
  const per = new Person(18);
  per.sayHi();
  // name1静态属性，只能使用类名调用
  console.log(Person.name1);// 小甜甜
  Person.name1 = "花满楼";
  console.log(Person.name1);
})();