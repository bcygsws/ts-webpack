/**
 * 
 * @ 21-泛型约束
 * 
 */
// (() => {
//   // 封装一个函数，获取它的长度
//   function getLength<T>(x: T): number {
//     // 报错：类型“T”上不存在属性“length”。
//     return x.length;
//   }
// })();
// 报错原因：x使用泛型T这个类型，不明确，不能直接使用x.length;【泛型约束】来解决这个问题
(() => {
  interface ILength {
    length: number;
  }
  // 封装一个函数，获取它的长度
  function getLength<T extends ILength>(x: T): number {
    // 报错：类型“T”上不存在属性“length”。
    return x.length;
  }
  // 字符串string和数组number[]变量都有length属性，因此不会报不满足约束ILength的错误
  console.log(getLength<string>("abcdef"));
  // console.log(getLength<number>(1234));// 报错：数字变量没有length这个属性，类型“number”不满足约束“ILength”
  console.log(getLength<number[]>([1, 2, 3, 4, 5]));// 5
})();
