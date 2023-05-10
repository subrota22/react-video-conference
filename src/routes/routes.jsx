import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Room from "../pages/Room/Room";
 
 export const routes = createBrowserRouter([
{
    path:"/", element:<Home></Home>
},
{
    path:"/room/:roomId/:name", element:<Room></Room>
},
 ]) ;
