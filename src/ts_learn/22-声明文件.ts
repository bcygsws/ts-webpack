/**
 * 
 * @ 22-声明文件
 * 
 * 
 */
// 1.安装jquery库
// 2.引入jquery库
// 3.使用jquery库
// 版本1：自然状态下
// import jQuery from  'jquery';
// // 除了这个导入，鼠标放在jQuery上没有其他提示，怎么办呢？
// // 解决：自定义jQuery的功能第12行
// // 自定义jquery的声明后，鼠标再放到jQuery('选择器')上面，就有提示信息了
// jQuery('选择器')

// 版本2：declare声明之后
// import jQuery from  'jquery';
// // 声明使用declare关键字
// declare var jQuery:(selector:string)=>any;
// // 除了这个导入，鼠标放在jQuery上没有其他提示，怎么办呢？
// // 解决：自定义jQuery的功能第12行
// // 自定义jquery的声明后，鼠标再放到jQuery('选择器')上面，就有提示信息了
// jQuery('选择器')

// // 版本3：将declare声明的语句，抽离在单独文件，jquery.d.ts中
// // import jQuery from  'jquery';
// // // 声明使用declare关键字
// // declare var jQuery:(selector:string)=>any;
// // 除了这个导入，鼠标放在jQuery上没有其他提示，怎么办呢？
// // 解决：自定义jQuery的功能第12行
// // 自定义jquery的声明后，鼠标再放到jQuery('选择器')上面，就有提示信息了
// jQuery('选择器')

// // 当前文件中，没有引入jQuery,系统本身就会去扫描是否存在声明文件？jQuery.d.ts；果然存在这个文件，jQuery('选择器')
// // 就会给出智能提示：var jQuery: (selector: string) => any

// 版本4：jquery中的方法和属性很多，不能逐个像这样自定义，我们可以像安装插件包一样，为它安装声明文件
// 命令$: npm i @types/jquery --save-dev,然后使用import jQuery from 'jquery';引入
// 总结：版本4提供了一种使用第三方插件，并且获取代码提示的方法
import jQuery from 'jquery';
jQuery('选择器')
// 把鼠标放到jQuery上，此时会有很多提示信息了，提示信息如下：
/* 
(alias) jQuery<HTMLElement>(html: string, ownerDocument_attributes?: Document | JQuery<TElement = HTMLElement>.PlainObject<any>): JQuery<HTMLElement> (+8 overloads)
import jQuery
Creates DOM elements on the fly from the provided string of raw HTML.

@param html
@param html

html (ownerDocument) — A string of HTML to create on the fly. Note that this parses HTML, not XML.
html (attributes) — A string defining a single, standalone, HTML element (e.g. <div/> or <div></div>).
@param ownerDocument_attributes
@param ownerDocument_attributes

ownerDocument — A document in which the new elements will be created.
attributes — An object of attributes, events, and methods to call on the newly-created element.
@see — ``

@since — 1.0

@since — 1.4

@example

````Create a div element (and all of its contents) dynamically and append it to the body element. Internally, an element is created and its innerHTML property set to the given markup.

$( "<div><p>Hello</p></div>" ).appendTo( "body" )
@example

````Create some DOM elements.

$( "<div/>", {
"class": "test",
text: "Click me!",
click: function() {
$( this ).toggleClass( "test" );
}
})
.appendTo( "body" );



*/