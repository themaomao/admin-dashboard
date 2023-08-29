import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";


//numbers on the bottom means the choosen color from lignt to dense.
//also in here the primary color is grey as well, just gray in different way.
//controlls the day/night mode of the app color

export const tokens = (mode) => ({
    ...(mode === "dark"
    ?{
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414",
          },
          primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#1F2A40",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509",
          },
          greenAccent: {
            100: "#dbf5ee",
            200: "#b7ebde",
            300: "#94e2cd",
            400: "#70d8bd",
            500: "#4cceac",
            600: "#3da58a",
            700: "#2e7c67",
            800: "#1e5245",
            900: "#0f2922",
          },
          redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f",
          },
          blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632",
          },
    }
    :{
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
          },
          primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0", 
            500: "#141b2d",
            600: "#1F2A40",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
          },
          greenAccent: {
            100: "#0f2922",
            200: "#1e5245",
            300: "#2e7c67",
            400: "#3da58a",
            500: "#4cceac",
            600: "#70d8bd",
            700: "#94e2cd",
            800: "#b7ebde",
            900: "#dbf5ee",
          },
          redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
          },
          blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe",
          },
    }),
});

export const themeSettings = (mode) =>{
    const colors = tokens(mode);
    return{ /*return the palette and font */
        palette: {
           mode: mode,
           ...(mode === "dark"
           ?{
            // palette values for dark mode
            primary:{
                main: colors.primary[500],
            },
            secondary:{
                main:colors.greenAccent[500],
            },
            neutral:{
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
            },
            background:{
                default: colors.primary[500],
            },
           }
           :{
            // palette values for light mode
            primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              },
           }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize:12,
            h1: {
                fontFamily:  ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
              },
              h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
              },
              h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
              },
              h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
              },
              h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
              },
        },
    };
};

//in fontFamily: ["Source Sans Pro", "sans-serif"].join(","), what is the .joint for?
//在这里，.join(",") 的作用是将多个字体名称合并成一个用逗号分隔的字符串。在这个例子中，fontFamily 属性期望一个字体名称的数组，但它只能接受一个字体名称的字符串。
//通过使用 .join(",")，您可以将数组中的多个字体名称合并成一个用逗号分隔的字符串，以满足 fontFamily 属性的要求。
//use "camelCase" for naming variables
//myVariableName
//calculateTotalAmount
//getUserInfo
// what is he"..."" means? ...(mode === "dark" 部分表示根据条件来展开对象的属性。具体来说，如果条件 mode === "dark" 成立（为 true），
//那么后面的对象将会被展开到外层的对象中。


// context for color mode
//what is the context means in here?
//在 React 中，"context" 是一个特殊的组件，可以将数据和函数传递给组件树的不同部分。这使得您可以轻松地在组件之间共享数据，
//以及让组件在不同的上下文环境中获得正确的数据。总之，"context" 在编程中表示程序运行时的环境或情境，它在前端开发中常常用于共享数据和状态，以简化组件之间的数据传递。
//从 ColorModeContext 中获取了 toggleColorMode 函数，并将其用于按钮的点击事件上。当点击按钮时，可以调用 toggleColorMode 函数来切换颜色模式。
export const ColorModeContext = createContext({
    toggleColorMode: ()=>{},
});

export const useMode = () =>{
    const [mode, setMode] = useState("light");

    const colorMode = useMemo (
        () => ({
            toggleColorMode: ()=>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );
   /*[] 作为依赖项数组：依赖项数组告诉 React 什么情况下需要重新计算 useMemo 的结果。
   当依赖项数组中的任何一个变量发生变化时，useMemo 内部的函数会重新执行。
如果依赖项数组为空（[]），那么 useMemo 内部的函数只会在组件首次渲染时执行一次，之后不会再执行。 */
 const theme = useMemo (() => createTheme(themeSettings(mode)), [mode]);
 return [ theme, colorMode];
};
//const 是声明常量变量的关键字
//通过 export const，您可以将常量变量暴露给其他模块，以便其他模块可以导入和使用这些常量。
/*// constants.js 模块
export const myExportedConstant = 42; // 导出常量

// otherModule.js 模块
import { myExportedConstant } from './constants.js'; // 导入常量
console.log(myExportedConstant); // 42
 */
/*这是一个箭头函数，它接收一个参数 prev，表示之前的颜色模式。根据 prev 的值，如果之前是 "light"，则返回 "dark"，如果之前是 "dark"，
则返回 "light"。这样就实现了在 "light" 和 "dark" 之间切换的逻辑。在这个上下文中，prev 是一个参数，用于在切换颜色模式时访问之前的
模式值。这种写法利用了函数作用域和闭包，以确保在更新颜色模式时，能够正确地使用之前的模式值。
 */
/*useMemo 和 useCallback 都有助于减少不必要的计算和函数创建，从而提高组件的性能。useMemo 主要用于缓存计算的结果，而 useCallback 主要用于缓存函数。在选择使用哪个钩子时，要根据具体的情况和需要来决定。 */

/*使用 export default 导出时，other file 导入时不需要花括号，可以自定义导入名字。
不使用 export default，需要使用花括号来指定导入的内容，并且导入的名字必须和导出的名字一致。
选择使用哪种方式取决于你的需求和设计。使用 export default 可以让导入代码更简洁，而不使用它则允许你一次性导出多个命名的内容。 */

