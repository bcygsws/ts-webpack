/**
 * 
 * @ 剩余参数
 * 剩余参数放在参数的最后，除了前面明确的参数一一对应，后面没有明确的参数，相当于被放进了一个数组中
 * 
 * 
 */
(() => {
  // 剩余参数
  function showMsg(str: string, ...args: string[]) {
    console.log(str);
    console.log(args);
  }
  showMsg('张三', '里', '郑法', '钟永刚');
})();