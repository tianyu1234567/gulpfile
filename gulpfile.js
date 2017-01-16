/*
* @Author: cc
* @Date:   2017-01-15 20:01:40
* @Last Modified by:   anchen
* @Last Modified time: 2017-01-16 13:36:14
*/

'use strict';
var gulp = require("gulp"),
    rename=require("gulp-rename")
var sass=require("gulp-ruby-sass");
//未成功
gulp.task("sass",function(){
    gulp.src("app/css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("build/css/"))
});
var less = require("gulp-less");
//less 转为css
    gulp.task("less",function(){
            gulp.src("app/css/style.less")
            .pipe(less())
            .pipe(gulp.dest("app/css/"))
        });
    //实时对less转为css   进行监听
    gulp.task("watch",function(){
            gulp.watch("app/css/*.less",["less"])
        })
var concat = require("gulp-concat");
//文件合并
    gulp.task("concat",function(){
            gulp.src("app/js/*js")
            .pipe(concat("index.js"))
            .pipe(gulp.dest("build/js/"))

        });
var ugly = require("gulp-uglify");
//js文件压缩
    gulp.task("uglify",function(){
            gulp.src("app/js/js.js")
            .pipe(ugly())
            .pipe(gulp.dest("build/js"))
        });
var minifycss = require("gulp-minify-css");
    gulp.task("minifycss",function(){
            return gulp.src("app/css/*.css")
            .pipe(rename({suffix:".min"}))
            .pipe(minifycss())
            .pipe(gulp.dest("build/css/"))
        })
var ap=require("gulp-autoprefixer");
//自动补全  不完整  不建议使用
gulp.task("prefixer",function(){
    gulp.src("app/css/*.css").
    pipe(ap()).
    pipe(gulp.dest("build/css/"))
});
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
//图片压缩
gulp.task('images', function(){
  return gulp.src('app/images/img/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('build/images'))
});
var minicss = require("gulp-clean-css");
gulp.task("minicss",function(){
    gulp.src("app/css/*.css")
    .pipe(minicss())
    .pipe(gulp.dest("build/css"));
});