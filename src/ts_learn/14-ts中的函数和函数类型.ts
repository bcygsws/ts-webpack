/**
 * 
 * ts中的函数和函数类型
 * 
 */
(() => {
  function getSum(x: number, y: number): number {
    return x + y;
  }
  const result = getSum(2, 3);
  console.log(result);
})();