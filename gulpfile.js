/* 
    src()：获取要操作的文件

    pipe()：管道，也就是帮助我们做事的

    dest()：写入，就是把我们的开发文件存在在指定的位置

*/
var gulp=require('gulp')
//css的压缩依赖
var cssmin=require('gulp-cssmin')
//添加样式前缀
var autoprefixer=require('gulp-autoprefixer')
//压缩js文件
var uglify=require('gulp-uglify')
//ES6转ES5的依赖
var babel=require('gulp-babel')
//压缩HTML文件中的代码
var htmlmin=require('gulp-htmlmin')
//删除
var del=require('del')
//服务器
var webserver=require('gulp-webserver')
//sass
var sass=require('gulp-sass')
//把src中的lib文件夹里面的内容，转存到dist文件夹下面的lib文件夹中
let libHandler=()=>{
    return gulp.src('./src/json/**')
    .pipe(gulp.dest('./dist/json'))
}
let libHandler1=()=>{
    return gulp.src('./src/php/*.php')
    .pipe(gulp.dest('./dist/php'))
}
let libHandler2=()=>{
    return gulp.src('./src/*.ico')
    .pipe(gulp.dest('./dist'))
}

let imgHandler=()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}
let imgHandler1=()=>{
    return gulp.src('./src/img/**')
    .pipe(gulp.dest('./dist/img'))
}
let imgHandler2=()=>{
    return gulp.src('./src/img1/**')
    .pipe(gulp.dest('./dist/img1'))
}
let imgHandler3=()=>{
    return gulp.src('./src/img2/**')
    .pipe(gulp.dest('./dist/img2'))
}


//压缩css文件的样式
var cssHandler=()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
let sassHanlder=()=>{
    return gulp.src('./src/sass/**')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
//压缩js文件代码
var jsHandler=()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}
var htmHandler=()=>{
    return gulp.src('./src/*.html')
    // .pipe(htmlmin({
    //      removeAttributeQuotes:true,//移除属性上的双引号
    //      removeComments:true,//移除注释
    //      collapseWhitespace:true,//移除所有空格,会变成一行代码
    //      minifyCSS:true,//把页面里面style标签里面的css样式也去空格
    //      minifyJS:true,//把页面里面script标签里面的js代码也去空格
    //      collapseBooleanAttributes:true//把值为布尔值的属性简写
    // }))
    .pipe(gulp.dest('./dist'))
}
var delHandler=()=>{
    return del(['./dist'])
}

var webserverHandler=()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        port:'8088',
        open:'03index.html',
        livereload:true,
        proxies:[ //这个第三方模块还可以帮助我们配置代理
            //直接在使用webserver的时候添加一个配置项:proxies:[]
            {
                source: '/abc', //表示请求的地址
                target: 'http://www.xuexi.com/2004/day37/src/php/a.php'//你要代理的地址
            },
            {
                source: '/eee', //表示请求的地址
                target: 'http://127.0.0.1/json.php'//你要代理的地址
            }
        ]
    }))
}

let watchHandler=()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHandler);
    gulp.watch('./src/*.html',htmHandler);
}
//parallel()：该方法是批量随机执行任务，不是按从左到右的顺序执行
//series()：该方法是按从左到右的顺序批量执行任务
module.exports.default= gulp.series(
    delHandler,
    gulp.parallel(libHandler,libHandler1,libHandler2,imgHandler,imgHandler1,imgHandler2,imgHandler3,cssHandler,htmHandler,jsHandler,sassHanlder),
    webserverHandler,
    watchHandler
    )