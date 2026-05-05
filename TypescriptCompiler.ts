//--------------------------------------------------------------//
// 128. Module Introduction - The TypeScript Compiler 
//-------------------------------------------------------------//


//1. File Options : Options related to how TypeScript treats TypeScript Files.
//2. Type Checking Options : Options that alter TypeScript's behaivior related to type checking and other code related and other code related features that typeScript offeres.
//                           Then we look at various type checking options that are available to us in Tsconfig file.
//                           These options impact the behavior of TypeScript when it comes to type checking, and various other features that are offered by TypeScript.
//3.File Watcher and Source Maps : We look at how we can use the built in file watcher and source maps during development with typescript.
//We will also create npm scripts to automate our development workflow.

//--------------------------------------------------------------//
// 129.Setting up Base Project 
//-------------------------------------------------------------//

//tsconfig.json file is the configuration file for TypeScript projects. It allows us to specify various 
// options that control how TypeScript compiles our code and how it behaves during development.
//We will start by creating a tsconfig.json file in the root of our project. We can do this by running the following command in our terminal
//So wherever you have this TS config file this is treated as the root directory for TypeScript.
//Wherever TypeScript is going to see any TypeScript files within this directory itself, it is going
//to go ahead and convert them into JS files whenever you run this TypeScript compiler command.

//---------------------------------------------------------------------------------------//
// 130. Including and Excluding Files in TypeScript Compilation in tsconfig.json
//---------------------------------------------------------------------------------------//


//------- Exclude Option in tsconfig.json -------//

// in tsconfig.json : config file that you generate using the tsc init command does not give you the exclude option, it just gives you these compiler options.
// so there's another option called "exclude" which is an array of strings that you can use to specify which files or directories you want to exclude from the compilation process.
// By default, TypeScript will include all files in the directory and subdirectories where the tsconfig.json file is located, except for those specified in the exclude option.
// So if you want to exclude a specific file or directory, you can add it to the exclude array. For example, if you want to exclude a directory called "node_modules", you can add it like this:
// "exclude": ["node_modules"]
// You can also exclude specific files by adding their paths to the exclude array. For example, if you want to exclude a file called "test.ts", you can add it like this:
// "exclude": ["test.ts"]
// You can also use glob patterns to exclude multiple files or directories. For example, if you want to exclude all files with the .test.ts extension, you can add it like this:
// "exclude": ["**/*.test.ts"]
// The exclude option is useful for preventing TypeScript from compiling files that you don't want to include in your project, such as test files, build files, or files that are not relevant to your project.

//So for example, if I want to exclude app2 dot ts file, I can do so like this.
// "exclude": ["app2.ts"]
// Now when I run the TypeScript compiler,  it will ignore app2.ts file.It automatically starts from the root directory itself.
// So this is how we can use the exclude option in our tsconfig.json file to exclude specific files or directories from the compilation process.

//the moment you define the exclude property in TS config file, you have to go ahead and mention 
// all the files and folders that you want to exclude from TypeScript compilation.



//So we can use a wildcard symbol that is an asterisk followed by any wildcard path that we want to define.
//So I can say I want to exclude all files with an asterisk followed by exclude TS.
//"exclude": ["app2.ts","*.exclude.ts"]
//Now in this case, TypeScript will exclude all the files that have an extension of exclude TS.
//The asterisk symbol here acts as a wildcard, which means that any file which has any name but has an
//extension of dot exclude dot ts will be excluded from TypeScript compilation.

//We can go a step further as well and use double asterisk ** like so.
//"exclude": ["app2.ts","*.exclude.ts","**/*.exclude.ts"]
//** : Now what this tells TypeScript is that inside any directory or sub directory 
//*.exclude.ts : if you find any file name which has an extension of dot exclude dot ts, do not compile it.
// So TypeScript compiler will exclude any nested TypeScript files in any of the subdirectories which have
// the dot exclude dot TypeScript extension.
// So TypeScript compiler will exclude any nested TypeScript files in any of the subdirectories which have
//the dot exclude dot TypeScript extension.


//------- Include  Option in tsconfig.json -------//

//So let's go ahead and define an include property here.
// Include is again an array of values.
// Now here you can specify if you want to include any specific directories.
// Once you add this property TypeScript will include only those files and directories that have been mentioned
// in the include array.
// Again, this works very similarly to the exclude property.
// So in my root directory I might have an src directory.
// And I might just want TypeScript to compile this directory only.
// And in this case I can include that directory into this array.
//"include": ["src"]
//Now when I run the TypeScript compiler, it will only compile the files that are present in the src directory and ignore all other files and directories.
//So we can also use wildcards here as well. For example, if I want to include all files with an extension of dot ts ".ts", I can do so like this.
//"include": ["src","*.ts"]
//Now when I run the TypeScript compiler, it will include all the files that are present in the src directory and also any file with an extension of dot ts in the root directory.
//We can also use the double asterisk here as well.
//"include": ["src","*.ts","**/*.ts"]
//Now when I run the TypeScript compiler, it will include all the files that are present in the src directory and also 
// any file with an extension of dot ts in the root directory and also any file with an extension of dot ts in any of the subdirectories.
//So this is how we can use the include option in our tsconfig.json file to include specific files or directories in the compilation process.
//and anything that is not mentioned inside include is not included
//in the compilation process.



//------- Next Lesson -------//
// Now it turns out that if you want to keep all our files in a single directory like the src direct,
// then there is a better way to do that which we will look at in the next lesson.


//---------------------------------------------------------------------------------------//
// 131. rootDir and outDir Options in tsconfig.json
//---------------------------------------------------------------------------------------//

//------- rootDir -------//

// I want to point your attention to two properties.
// The first one is the root directory
// Let's read what the root directory description has to say.
//rootDir : Specifies the root directory of input files. Only use to control the output directory structure with outDir.
//So this is the directory where TypeScript will look for all the TypeScript files that it needs to compile.
//outDir : Specifies the output directory for the compiled JavaScript files.
//So this is the directory where TypeScript will place all the compiled JavaScript files after it compiles the TypeScript files.
//So if I want to keep all my TypeScript files in a single directory like the src directory, I can do so by using the rootDir and outDir properties in my tsconfig.json file.
//So I can set the rootDir to src and the outDir to dist like this.
//"rootDir": "src",
//"outDir": "dist"
//Now TypeScript will only look for TypeScript files within the src directory and compile them.
//Now when I run the TypeScript compiler, it will look for all the TypeScript files in the src directory and compile them into JavaScript files and place them in the dist directory.
//So this is a better way to keep all our files in a single directory like the src directory and have all the compiled JavaScript files in a separate directory like the dist directory.
//This way we can keep our source code and our compiled code separate from each other, which is a good practice in software development.


//So here currently in ts.config 
//the rootdir in naka comment what i do is comment out ko sya 
//"rootDir": "./src",
//since here naka specify na icompile nya lang yung nasa loob ng src and currently wala akong folder na src 
// so here i will create a folder called src and move all my TypeScript files into that folder.
// and inside of this now i can move file i want to compile but for this section i will create a new file inside for this folder src and name it 
// as tsconfig.ts 


//------- outrootDir -------//


// The second property that I want you to look at is the outDir directory in tsconfig.json file. 
// This property specifies the output directory for the compiled JavaScript files.
// This property lets you define an output directory for all the JavaScript files.
// So if I go to the root of my project and create a new directory and call this dist 
// so before in rootDir we created a src folder here for outDir directory we will create a dist folder 
// and this is where all the compiled JavaScript files will go.
// so here i created new folder and called dist
// and if we go to tsconfig in outDir now is have dist folder
// and tell TypeScript to compile all JavaScript files in the disk directory.


//"outDir": "./dist",

//so what i observe that when i run the typescript compiler without the outdir 
//pag nag tsc ako automatically it will create a JavaScript file .js .d.ts, .js.map, d.ts.map in the same directory as the TypeScript file which is src.
// so instead of creating a JavaScript file in the same directory as the TypeScript file, it will create a JavaScript file in the dist directory that we have specified in the outDir property.
//So this is how we can use the outDir property in our tsconfig.json file to specify the output directory for the compiled JavaScript files.

//so here example in the src folder i add new directory (new folder inside src) and name this function 
// and inside this function folder i will create a new .js .d.ts, .js.map, d.ts.map file userName.ts 
// and when i run the tsc in the terminal it will create a new folder in dist with same name and under with this folder will have ts file same in the source added 

//so here ang expected output ko sa dist folder it will only generate javascript file .js
//pero ang nang yayari is it also generate the .d.ts, .js.map, d.ts.map file which is not what i want.

//nang yayare to kasi sa tsconfig file is naka set to true tong mga nasa baba 

    // Other Outputs
    // "sourceMap": true,
    // "declaration": true,
    // "declarationMap": true,

// Setting	        Output
// declaration	    .d.ts
// sourceMap	    .js.map
// declarationMap	.d.ts.map

// "declaration": true - This is a Type Definition file Used when your code is used by other TypeScript projects (like a library)
// "sourceMap": true - Helps debugging , Maps .js back to your original .ts file in DevTools
// "declarationMap": true - Links .d.ts back to .ts ,Useful for library developers

// When should you keep them?
// Keep declaration: true → if you're building a library / reusable package
// Keep sourceMap: true → if you want easy debugging
// Remove them → if you're just learning / simple project



//and since for now i dont need these file so i will set these properties to false in tsconfig file like this


 // Other Outputs
    // "sourceMap": false,
    // "declaration": false,
    // "declarationMap": false,


//so i will create new folder in src folder and name this OutFiles and add new file inside and name it removeFiles.ts 



//---------------------------------------------------------------------------------------//
// 132. Setting a Compilation Target in tsconfig.json
//---------------------------------------------------------------------------------------//


//Target is a property in tsconfig.json file that specifies the target version of JavaScript that TypeScript will compile to.
//By default, TypeScript will target the latest version of JavaScript that is supported by the current version of TypeScript.
//However, you can specify a different target version if you want to ensure that your code is compatible with older browsers or environments that do not support the latest JavaScript features.
//The target property accepts a string value that represents the target version of JavaScript. Some of the common target values include:
// "ES3" : This is the default target version for TypeScript. It is compatible with all JavaScript environments, including older browsers.
// "ES5" : This target version is compatible with most modern browsers and environments. It includes features such as classes, modules, and arrow functions.
// "ES6" or "ES2015" : This target version includes all the features of ES5, as well as new features such as let and const, template literals, and destructuring.
// "ES2016" : This target version includes all the features of ES6, as well as new features such as async functions and the exponentiation operator.
// "ES2017" : This target version includes all the features of ES2016, as well as new features such as shared memory and atomics.
// "ES2018" : This target version includes all the features of ES2017, as well as new features such as rest/spread properties and asynchronous iteration.
// "ES2019" : This target version includes all the features of ES2018, as well as new features such as optional catch binding and JSON superset.
// "ES2020" : This target version includes all the features of ES2019, as well as new features such as nullish coalescing and optional chaining.
// "ES2021" : This target version includes all the features of ES2020, as well as new features such as logical assignment operators and numeric separators.
// "ES2022" : This target version includes all the features of ES2021, as well as new features such as class fields and private methods.
// "ES2023" : This target version includes all the features of ES2022, as well as new features such as top-level await and temporal.
// "ES2024" : This target version includes all the features of ES2023, as well as new features such as pattern matching and record & tuple types.

//So if I want to target ES2024, I can set the target property in my tsconfig.json file like this:
// "target": "ES2024"
//Now when I run the TypeScript compiler, it will compile my TypeScript code to JavaScript that is compatible with ES2024.



//---------------------------------------------------------------------------------------//
// 133. TypeScript Core Libs
//---------------------------------------------------------------------------------------//

//  add the following code to it.
// just write simple javascriptcode 

//const button = document.getElementById(elemetid: 'button');



//const buttons = document.getElementById(elemetid: 'buttons');








