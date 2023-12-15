import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Skills from "../pages/Education";
import Services from "../pages/Hobbies";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Hobbies from "../pages/Hobbies";


const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Home/>,
              },
              {
                path: "/about",
                element: <About/>,
              },
              {
                path: "/education",
                element: <Skills/>,
              },
              {
                path: "/hobbies",
                element: <Hobbies/>,
              },
              {
                path: "/contact",
                element: <Contact/>,
              },
        ]
    }
  ]);

export default router