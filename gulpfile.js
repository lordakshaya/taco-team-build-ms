var gulp = require("gulp"),
    fs = require("fs"),
    ts = require("gulp-typescript");
    
var tsconfigPath = "tsconfig.json";
    
gulp.task("scripts", function () {
    // Compile TypeScript code - This sample is designed to compile anything under the "scripts" folder using settings
    // in scripts/tsconfig.json if present or this gulpfile if not.  Adjust as appropriate for your use case.
    if (fs.existsSync(tsconfigPath)) {
        // Use settings from scripts/tsconfig.json
        gulp.src("scripts/**/*.ts")
            .pipe(ts(ts.createProject(tsconfigPath)))
            .pipe(gulp.dest("bin/scripts"));
    } else {
        // Otherwise use these default settings
         gulp.src("scripts/**/*.ts")
            .pipe(ts({
                noImplicitAny: false,
                noEmitOnError: true,
                removeComments: false,
                sourceMap: true,
                out: "appBundle.js",
                target: "es5",
                module: "commonjs"
            }))
            .pipe(gulp.dest("bin/scripts"));        
    }
});

gulp.task("default", ["scripts"], function () {});

gulp.task("clean", function() {
    
});