/**
 * 
 * 19-泛型接口.ts
 * 
 * 
 */
// 定义一个数组data，接着定义向里面添加用户信息方法，然后又可以根据id查找用户信息的方法
(() => {
  // 定义一个泛型接口
  interface IType<T> {
    data: Array<T>;
    add: (t: T) => T;// 返回值是T
    getInfoById: (id: number) => T;// 返回值是T
  }
  // 为UserCRMD实现接口时，才明确接口的类型，上面定义的接口就是一个泛型接口
  class UserCRMD implements IType<User>{
    name: string;
    age: number;
    data: Array<User> = [];
    // constructor(name: string, age: number) {
    //   this.name = name;
    //   this.age = age;
    // }
    add(user: User): User {
      // User中声明了id，没有初始化，id的默认值是undefined
      // 此处使用获取时间的毫秒数，加上Math的随机函数，产生id,避免id重复
      user.id = Date.now() + Math.random();
      this.data.push(user);
      return user;
    }
    getInfoById(id: number): User {
      // Array的find方法：返回满足测试条件的第一个元素值
      // Array的findIndex方法：返回满足测试条件的第一个元素的索引值
      return this.data.find((item) => id = item.id);
    }
  }
  // User类实例化对象，作为UserCRMD类的add方法的参数
  class User {
    name: string;
    age: number;
    id: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  const uscrmd: UserCRMD = new UserCRMD();
  // User是接口的类型，也可以传入Animal，代码中的User全部替换成Animal即可
  const user1 = new User('Jack', 18);
  uscrmd.add(user1);
  uscrmd.add(new User('赛柏林', 17));
  uscrmd.add(new User('小马', 12));
  console.log(uscrmd.data);
  // 拿到Jack的id，解构出来id是User任何实例的一个属性，第39行声明了id:number;
  const { id } = user1;
  console.log(uscrmd.getInfoById(id));
})();