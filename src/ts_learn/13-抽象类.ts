/**
 * 
 * 抽象类的使用
 * 
 * 
 * 
 */
(() => {
  // 定义抽象类，使用abstract关键字
  abstract class Person {
    // 抽象属性
    abstract gender;
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    // 抽象类中的抽象方法
    // 1.抽象类中可以包含抽象方法，和实例方法，而且抽象类是无法实例化的
    // 2.抽象类主要用于帮助子类创建实例和实现方法，或者说抽象类是为派生类而存活的
    // 3.抽象类中所有的抽象属性和抽象方法，继承这个抽象类的子类中必须加以实现，否则代码报错
    // 4.抽象类中的抽象属性不能初始化，抽象方法不能包含函数体
    // 5.抽象类的抽象属性，在子类实例中也是可读可写的
    // 6.抽象属性，一般不怎么使用

    // 抽象方法
    abstract cry();
    // 实例方法
    sayHi() {
      console.log('你好啊！~');
    }
  }
  class Man extends Person {
    gender: string = "男人";
    constructor(name: string, age: number) {
      super(name, age);
    }
    // 在子类Man中，实现cry方法
    cry() {
      console.log(this.name + '哭了~！');
    }

  }
  // 抽象类本身无法进行实例化，代码报错：constructor Person(name: string, age: number): Person无法创建抽象类的
  // 实例
  // const per = new Person('张一鸣', 45);
  const man: Person = new Man("李寻欢", 37);
  man.cry();// 李寻欢哭了~！
  // 抽象属性在子类的实例中，也是可读可写的
  console.log(man.gender);// 男人
  man.gender = "男性";
  console.log(man.gender);// 男性
})();