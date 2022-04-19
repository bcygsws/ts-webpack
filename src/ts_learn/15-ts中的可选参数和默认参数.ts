/**
 * @ ts中的可选参数和默认参数
 * 
 */
(() => {
  // ts中的可选参数和默认参数
  // lastName后面?，和正则中的问号，含义一样，表示0或1次，即这是个可选参数
  const getFullName = function (firstName: string = "东方", lastName?: string): string {
    // 先判断lastName是否存在
    if (lastName) {
      return firstName + "" + lastName;
    } else {
      // console.log('传入0个或者1个参数所走的分支');
      return firstName;
    }
  }
  console.log(getFullName());// 没传入任何参数，使用firstName的默认值
  console.log(getFullName("公孙"));// 传入第一个参数
  console.log(getFullName("公孙", "无敌"));

})();