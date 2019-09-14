###发布自定义模块
1.注册npm账号，验证邮箱
2.切换npm源  
$ nrm ls
$ nrm use npm
3.在该项目下，新建一个文件夹，文件夹不能和nmp上面的包名重名
4.终端进入到新建的这个文件夹目录下$ cd h5-1907-yhr/
5.初始化 $ npm init(一直回车，结束后，生成一个package.json文件。)
内容如下：
{
  "name": "h5-1907-yhr",
  "version": "1.0.0",
  "description": "",//描述
  "main": "index.js",//入口文件，默认名有个index.js文件。所以我们在相应项目的文件夹下新建一个index.js。我们写一些功能，把它封装好，给被人使用的，都是写在index.js这个文件里。
  ```
  "scripts": { //npm脚本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],//关键子
  "author": "",
  "license": "ISC" //发布的方式(开源/闭源)
}
```
6.新建一个服务
7.确定这个服务没问题。登录npm账号(用户名yanhuarong,密码yanhuarong8023,邮箱810424615@qq.com) $ npm adduser
成功后输出Logged in as yanhuarong on https://registry.npmjs.org/.
8.之后上传项目（该命令一定在项目根目录执行）。$ npm publish
