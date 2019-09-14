// node后端路由

// 第一版
// 引入模块
// const http=require("http");
// const path=require("path");
// // 申明变量
// const port=8888;
// //创建一个服务(开启服务，最简单的第一版本)，开启服务后往这个页面像服务器发起请求
// http.createServer((req,res)=>{
//     res.write("haha");
//     res.end();

// }).listen(port,()=>{
//     console.log(`server is running on http://localhost:${port}`);
// });




// // 第二版
// // node后端路由

// // 引入模块
// const http = require("http");
// const path = require("path");
// // 申明变量
// const port = 8888;
// //创建一个服务(开启服务)，开启服务后往这个页面像服务器发起请求
// http.createServer((req, res) => {
//     if (req.url == "/favicon.ico") return; //favicon.ico图标，不让它响应。
//     let url = path.join(req.headers.host, req.url); //拼接完整路径res.headers.host主机名
//     console.log(`${req.method}${url}`); //req.method请求方式。 输出请求路径为：GETlocalhost:8888\(根目录)
//     res.writeHead(200, {//设置响应头信息。第一个是http状态码，第二个对象，表示要响应的内容。里面包含：一般有:响应内容类型，设置字符集等
//         "cont-type": "text/html",
//         "charset": "utf-8"
//     });// 设置响应头信息

//     // res.write("haha");//统一响应都为haha。现在需要根据不同的url，响应不同的内容
//     // res.end();

//     // res.write("<meta charset='utf-8'>"); //本写入到页面<head>中，就不会出现中文乱码。但检查我的页面，写入到了body中。???????????????

//     // 现在需要根据不同的url，做出不同的响应
//     switch (req.url) {//不同的url
//         case "/":  //斜杠表示根目录
//             res.end("<h1>index</h1>");
//             break;
//         case "/reg":
//             res.end("<h1>这里是注册页</h1>");
//             break;
//         case "/login":
//             res.end("<h1>这里是登录页</h1>");
//             break;
//         default:
//             res.end("<h1>404,找不到页面</h1>");
//     }


// }).listen(port, () => {
//     console.log(`server is running on http://localhost:${port}`);
// });



// node后端路由
// 第三版
// 第二版中响应的是swith循环中的内容，而实际应该是响应不用的页面给用户

// 引入模块
const http = require("http");
const path = require("path");
const fs = require("fs")
// 申明变量
const port = 8888;
//创建一个服务(开启服务)，开启服务后往这个页面像服务器发起请求
http.createServer((req, res) => {
    if (req.url == "/favicon.ico") return; //favicon.ico图标，不让它响应。
    let url = path.join(req.headers.host, req.url); //拼接完整路径res.headers.host主机名
    console.log(`${req.method}${url}`); //req.method请求方式。 输出请求路径为：GETlocalhost:8888\(根目录)
    res.writeHead(200, {//设置响应头信息。第一个是http状态码，第二个对象，表示要响应的内容。里面包含：一般有:响应内容类型，设置字符集等
        "cont-type": "text/html",
        "charset": "utf-8"
    });// 设置响应头信息

    // res.write("haha");//统一响应都为haha。现在需要根据不同的url，响应不同的内容
    // res.end();

    // res.write("<meta charset='utf-8'>"); //本写入到页面<head>中，就不会出现中文乱码。但检查我的页面，写入到了body中。???????????????

    // 现在需要根据不同的url，做出不同的响应(响应不同的页面，涉及到了文件操作)
    switch (req.url) {//不同的url
        case "/":  //斜杠表示根目录
            // 读取一个文件，发送给客户
            fs.readFile(path.join(__dirname, "html", "index.html"), "utf8", (err, data) => {
                if (err) console.log(err);
                res.end(data);//响应读取到的数据
            });
            break;
        case "/reg":
            fs.readFile(path.join(__dirname, "html", "reg.html"), "utf8", (err, data) => {
                if (err) console.log(err);
                res.end(data);//响应读取到的数据
            });
            break;
        case "/js/reg.js":
            res.writeHead(200, {//由于之前加载的是html文件信息，目前这里是需要加载js文件，所以此处修改之前的响应类型信息
                "cont-type": "text/javascript",
                "charset": "utf-8"
            });// 设置响应头信息
            fs.readFile(path.join(__dirname, "js", "reg.js"), "utf8", (err, data) => {
                if (err) console.log(err);
                res.end(data);//响应读取到的数据
            });
            break;
        case "/css/reg.css":
            res.writeHead(200, {//修改之前的响应类型信息
                "cont-type": "text/css",
                "charset": "utf-8"
            });// 设置响应头信息
            fs.readFile(path.join(__dirname, "css", "reg.css"), "utf8", (err, data) => {
                if (err) console.log(err);
                res.end(data);//响应读取到的数据
            });
            break;

        case "/login":
            fs.readFile(path.join(__dirname, "html", "login.html"), "utf8", (err, data) => {
                if (err) console.log(err);
                res.end(data);//响应读取到的数据
            });
            break;
        // 为404.html页面配置路由
        case "/404.html":
            fs.readFile(path.join(__dirname, "html", "404.html"), "utf8", (err, data) => {
                if (err) console.log(err);
                res.end(data);//响应读取到的数据
            });
            break;
        // 找不到上述所有页面，默认返回404页面
        default:
            fs.readFile(path.join(__dirname, "html", "404.html"), "utf8", (err, data) => {
                if (err) console.log(err);
                res.end(data);//响应读取到的数据
            });

    }


}).listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});