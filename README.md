## webpack 打包 ts 文件

### 配置过程

-   创建项目，项目名称为 ts-webpack
-   在根目录路径下，创建 dist、src 和 public 三个文件，并创建一个 webpack.config.js 文件
-   在根路径下，生成包管理文件 package.json,命令：npm init -y
-   用到 webpack，首先安装的 4 个包，webpack 4.43.0 webpack-cli 3.3.11(全局安装的不生效，webpack4 中需要安装 webpack-cli)、 webpack-dev-server 3.11.3、 html-webpack-plugin4.5.0
-   同样在根路径下，生成 ts 配置文件 tsconfig.json ,命令：tsc --init

### cross-env 插件的使用

-   作用：用于在包管理文件中，配置不同的环境下的配置文件
-   "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js",
-   "build": "cross-env NODE_ENV=production webpack --config webpack.config.js"

### 泛型类

#### 定义类时，类的类还不明确，实例化类对象时，再明确类型，这是泛型类的用法

### 泛型约束

#### 使用场景

-   如果定义一个
-   function getLength<T>(x:T){
-   return x.length;// 因为 x 的泛型，导致 x 上是否存在 length 属性是未知的，将报错
-
-   }

#### 解决办法

-   定义一个声明 length 属性的接口，让泛型 T 继承这个接口
-   interface ILength{
-   length:number;
-
-   }
-   function getLenght<T extends ILength>(x:T){
-   return x.length;// x 是 T 类型的，T 继承自有 length 属性的类，x.length 就不会报错了
-
-   }

### 内置对象

-   参考项目 ts-webpack 中，src/ts_learn/23-内对象.ts
-   包括 Boolean、String、Number、RegExp、Error、Date
-   let b:Boolean=new Booolean(1);打印 b 是一个对象，Boolean{true}; b=true,再次打印 b，b 从一个对象变成了布尔型的变量
-   let b:boolean=new Boolean(2);将报错：不能将类型“Boolean”分配给类型“boolean”。“boolean”是基元，但“Boolean”是包装器对象；包装类对象不能赋值给基元

#### BOM 和 DOM 中的内置对象-使用时，用到类型断言

##### 类型断言的两种方式：as 或者尖括号的方式

-   window
-   document
-   HTMLElement
-   NodeList
-   DocumentFragment
-   Event
