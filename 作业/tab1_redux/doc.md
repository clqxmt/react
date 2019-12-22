# webpack环境所需依赖
>1、`cnpm install webpack webpack-cli -D`
 2、处理css的loader 
    `cnpm install style-loader css-loader sass-loader node-sass postcss-loader autoprefixer -D`
 3、处理JS的loader
    `cnpm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D`
 4、处理图片的loader
    `cnpm install url-loader file-loader -D`
 5、常用的插件有哪些？
    `cnpm install html-webpack-plugin clean-webpack-plugin extract-text-webpack-plugin@next -D`
 6、合并webpack配置项
   `cnpm install webpack-merge -D`
 7、安装服务
   `cnpm install webpack-dev-server -D`

# webpack默认启动文件
> 默认启动文件是webpack.config.js如果想要更改文件路径或者名称的时候我们只需通过--config进行更改即可


# 抽离css的插件
>`extract-text-webpack-plugin@next`



# 函数化编程
特点：
   纯函数  声明式....

1、声明式VS命令式

```javascript
   var arr = [10,20,30,40];


   for(var i=0;i<arr.length;i++){
      arr[i]+=10;
   }


   arr.map(item=>item+=10);


```

2、纯函数：输入一定输出也一定


3、柯里化函数
**请编写一个函数add(1)(2)(3)结果为6 编写一个函数add(2)(3)结果为5**
```javascript
   function add(a){
      return function(b){
         return function(c){
            return a+b+c
         }
      }
   }


   //ES6箭头函数
   let add = a=>b=>c=>a+b+c;

   let add = _=>{

   }


   let add = a=>a;


   let add = _=({});
```

# 安装react所需要的一些依赖
`cnpm install react react-dom -S`