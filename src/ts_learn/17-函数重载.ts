/**
 * 
 * 17-函数重载
 * x,y都是字符串，拼接字符串；
 * x,y都是数字，数值相加
 * 
 * 
 */
(() => {
  // x,y以及函数的返回值都是联合类型
  function add(x: string, y: string): string;
  function add(x: number, y: number): number;
  function add(x: string | number, y: string | number): string | number {
    // 报错：运算符“+”不能应用于类型“string | number”和“string | number”。ts(2365)
    // 类似：java运算符也不能重载，C++支持运算符重载
    // 都是字符串，拼接成整个字符串
    if (typeof x === 'string' && typeof y === "string") return x + y;
    // 都是数字，数值相加
    if (typeof x === 'number' && typeof y === "number") return x + y;
  }
  console.log(add(1, 2));// 3
  console.log(add("I", "LOVE YOU"));// ILOVE YOU
  // console.log(add(5, 'def'));// undefined
  // console.log(add('abc', 5));// undefined
  console.log(add('张', "三影"));
  console.log(add(1, 3));
  // 解决：但是当出现一个参数是string,一个参数是数值的时候，会得到undefined；
  // 要让这种不合法的方式报错：可以使用函数重载，在这个函数实现前，分别定义两个函数重载的声明，代码第11、12行
  // 分析：使用函数重载来解决它，只设置参数类型相同的两种方式，都定义成函数
})();