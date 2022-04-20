/**
 * 
 * ts内置对象
 * 
 * String
 * Boolean 
 * Number
 * Error
 * RegExp
 * Date
 * 
 * 
 * 
 */
(() => {
  let b: Boolean = new Boolean(1);// 1，非0，肯定是true
  console.log(b);// Boolean {true} 此时的b是一个对象
  b = true;
  console.log(b);// true,此时b是一个布尔值了
  // Error:let bb: boolean已声明“bb”，但从未读取其值。ts(6133)不能将类型“Boolean”分配给类型“boolean”。“boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。ts(2322)
  // let bb: boolean = new Boolean(2);
  let n: Number = new Number(true);
  console.log(n);// Number {1} n是一个对象
  let s: String = new String('abc');
  console.log(s);// String {'abc'}
  let d: Date = new Date();
  console.log(d);// Wed Apr 20 2022 17:29:06 GMT+0800 (中国标准时间)
  // let r: RegExp = /\w+/;
  // console.log(r);// /\w+/
  let r: RegExp = new RegExp('\\w+');
  console.log(r);// /\w+/
  let e:Error=new Error('This is a mistake');
  // 打印结果：
  console.log(e);
  /* 
  Error: This is a mistake
    at eval (23-内置对象.ts?f538:32:1)
    at eval (23-内置对象.ts?f538:34:1)
    at Object../src/ts_learn/23-内置对象.ts (app.83f5706d.js:1401:1)
    at __webpack_require__ (app.83f5706d.js:790:30)
    at fn (app.83f5706d.js:101:20)
    at eval (main.ts?84e2:28:1)
    at Object../src/main.ts (app.83f5706d.js:1279:1)
    at __webpack_require__ (app.83f5706d.js:790:30)
    at fn (app.83f5706d.js:101:20)
    at Object.0 (app.83f5706d.js:1414:18)
main.ts?84e2:29 123
  
  */
//  DOM和BOM的对象，在ts中也都可以使用
// Window  BOM
// Document 
// HTMLElement
// DocumentFragment
// Event
// NodeList

const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment()





})();