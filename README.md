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
