import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/thebars/topbar";
import Sidebar from "./scenes/thebars/sidebar";
import Dashboard from "./scenes/dashboard";
import Manage from "./scenes/manage";
import Invioces from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Profileform from "./scenes/profileform";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/Geography";
import Calendar from "./scenes/calendar/calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode ();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invioces />} />
              <Route path="/profileform" element={<Profileform />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}
export default App;

//Q&A: 
//Q1. why somtimes <> sometimes </>
//A1. finish read everything first!!! <> is not finished yet , on the end shows </> to finish this import.
//Q2. why const [theme, colorMode] = useMode (); 中括号里面为空代表初始值为空？
//A2. 如果初始值为空，那么这两个变量在初始化时会被赋予一个 undefined 的值
//Q3. the 2 const before return, what is it mean?
//A3. these 2 means the new create by this file before return just for this file to use.
//Q4. what is the Cssbaseline for? means?
//A4. 通常位于ThemeProvider上下文内, 减少了由于浏览器默认样式而导致意外变化外观的可能性。
//Q5. where is the <div className="app"> 's app from ?
//A6.
//Q7. why <Sidebar isSidebar={isSidebar} /> <Topbar setIsSidebar={setIsSidebar} /> in different file?

//Note: 1.the top import only light up when return the item.
//2. in the routes and route, the route's path have to be in order so the web 
//able to tell which one need to show up first.
//使用 Routes 和 Route 来管理应用程序的路由时，确实需要在 index.js 中使用 BrowserRouter 来包裹 App.js。





