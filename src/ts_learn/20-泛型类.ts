/**
 * 
 * @ 20 泛型类
 * 
 * 
 */
// 泛型类：在定义类时还不明确类型，类实例化时再明确类型
(() => {
  class Person<T>{
    // 实例属性
    defaultVal: T;
    // 实例方法add
    add: (x: T, y: T) => T;
  }
  const person: Person<number> = new Person<number>();
  person.defaultVal = 100;
  console.log(person.defaultVal);
  // 相加的方法
  person.add = function (x, y) {
    return x + y;
  }
  console.log(person.add(1,3));// 4
  const p2: Person<string> = new Person<string>();
  p2.defaultVal = "张先";
  // 字符串拼接的方法
  p2.add = function (x, y) {
    return x + y;
  }
console.log(p2.add('望极蓝桥,',"但暮云千里"));// 望极蓝桥,但暮云千里
})();