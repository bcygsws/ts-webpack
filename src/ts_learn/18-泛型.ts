/**
 * 
 * 18-泛型
 * 概念：
 * 在定义函数、接口和类时还不能确定它们各自的类型，而在使用函数、接口和类时才能确定函数的类型，使用泛型解决它
 * 
 * 
 */
// 案例：根据传入的数字和数量，得到一个数组
(() => {
  // function getArray(value: number, total: number) {
  //   let arr: number[] = [];
  //   for (let i = 0; i < total; i++) {
  //     arr.push(value);
  //   }
  //   return arr;
  // }
  // console.log(getArray(134.45, 3));// (3) [134.45, 134.45, 134.45]
  // 问题是：如果getArray的参数是('abc',3),该怎么办呢？首先形参需要更改，定义的arr类型也需要修改；如果显式声明
  // 返回值，返回值也需要修改(这里使用类型推论，省略了函数的返回值类型)

  // 如果getArray的第一个参数是任何类型，该怎么办？再写单独的函数，代码就不够精炼了，用泛型来解决它；将函数定义中
  // 所有不确定的类型，先用一个大写字母占位，等函数调用时再明确
  function getArray<T>(value: T, total: number): T[] {
    // let arr: T[];
    let arr: Array<T> = [];
    for (let i = 0; i < total; i++) {
      arr.push(value);
    }
    return arr;
  }
  console.log(getArray<number>(134.45, 3));// (3) [134.45, 134.45, 134.45]
  const arr1 = getArray<number>(134.45, 3);
  // num数值.toFixed(小数点后保留的位数n)方法的含义：以字符串的形式返回处理后的数值
  console.log(arr1[0].toFixed(1));// 134.4
  console.log(typeof arr1[0].toFixed(1));// string
  console.log(getArray<string>('abc', 3));// (3) ['abc','abc','abc']
  console.log(getArray<boolean>(true, 3));// (3) [true,true,true]

})();
// 多个泛型参数的函数
(() => {
  // 多个泛型参数的函数
  function processPlus<X, Y>(x: X, y: Y) :string{
    return x + "" + y;
  }
  console.log(processPlus<number, string>(4, '张三影'));
  console.log(processPlus<boolean, string>(true, '张三影'));
})();