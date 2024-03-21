import { useState, useEffect } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageError } from "./components/pages/PageError"
import { Navbar } from "./components/Navbar";
import './App.css'
import './assets/fonts/CascadiaCode.ttf'
import './assets/fonts/CascadiaCodeItalic.ttf'
import { AboutMe } from "./components/pages/AboutMe";
import { Skills } from "./components/pages/Skills";
import { Projects } from "./components/pages/Projects";
import { MobileNavbar } from "./components/MobileNavbar";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <AboutMe />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/work',
        element: <Projects />
      }
    ]
  }
])

function Root() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width < breakpoint) {
    return (
      <div>
        <MobileNavbar />
        <Outlet />
      </div>
    );
  } else {
    return (
      <div className="row">
      <Navbar />
      <Outlet />
    </div>
  );
}
}

function App() {

  return (<RouterProvider router={router} />
  )
}

export default App
