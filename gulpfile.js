const gulp = require("gulp")

const htmlmin = require("gulp-htmlmin")

gulp.task("copy-html" , function(){
    return gulp.src("*.html")
    .pipe(
        htmlmin({
            removeEmptyAttributes:true,
            collapseWhitespace:true,
        })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload())
})

gulp.task("images",function(){
    return gulp.src("./images1/*{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload())
})

gulp.task("images2" , function(){
    return gulp.src("./images2/*{jpg,png}")
    .pipe(gulp.dest("dist/images2"))
    .pipe(connect.reload())
})
gulp.task("images6" , function(){
    return gulp.src("./images6/*{jpg,png}")
    .pipe(gulp.dest("dist/images6"))
    .pipe(connect.reload())

})

gulp.task("scripts" , function(){
    return gulp.src(["*.js" , "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
   .pipe(connect.reload())
})

gulp.task("data",function(){
    return gulp.src(["*.json" , "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload())
})

gulp.task("build" , ["copy-html" , "images" , "images2", "images6", "scripts" , "data"] , function(){
    console.log("项目建立成功")
})

const sass = require("gulp-sass")
const minifycss = require("gulp-minify-css")
const rename = require("gulp-rename")

gulp.task("sass" , function(){
    return gulp.src("./stylesheet/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("sass2" , function(){
    return gulp.src("./stylesheet/index2.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index2.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("sass3" , function(){
    return gulp.src("./stylesheet/index3.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index3.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("sass4",function(){
    return gulp.src("./stylesheet/index4.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index4.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("sass5",function(){
    return gulp.src("./stylesheet/index5.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index5.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("sass6",function(){
    return gulp.src("./stylesheet/index6.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index6.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("watch" , function(){
    gulp.watch("*.html" , ['copy-html'])
    gulp.watch("./images1/*{jpg,png}" , ['images'])
    gulp.watch("./images2/*{jpg,png}" , ['images2'])
    gulp.watch("./images6/*{jpg,png}" , ['images6'])
    gulp.watch(["*.js" , "!gulpfile.js"] , ['scripts'])
    gulp.watch(["*.json" , "!package.json"] , ['data'])
    gulp.watch("./stylesheet/index.scss" , ['sass'])
    gulp.watch("./stylesheet/index2.scss" , ['sass2'])
    gulp.watch("./stylesheet/index3.scss" , ['sass3'])
    gulp.watch("./stylesheet/index4.scss" , ['sass4'])
    gulp.watch("./stylesheet/index5.scss" , ['sass5'])
    gulp.watch("./stylesheet/index6.scss" , ['sass6'])
})

const connect = require("gulp-connect")
gulp.task("server" , function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true
    })
})

gulp.task("default" , ["watch" , "server"])

