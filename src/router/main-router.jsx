import { createBrowserRouter } from "react-router-dom";
import { Dashboard, AuthLayout } from "@layout";
import { Home, Leads, Orders, Users, Error, Posts } from "@pages";


const children=[
        {
            path:"/", 
            element:<Dashboard/>,
            children:[
                {path:"/home", element:<Home/>},
                {path:"/posts", element:<Posts/>},
                {path:"/leads", element:<Leads/>},
                {path:"/orders", element:<Orders/>},
                {path:"/users", element:<Users/>}
            ]
        },
        {
            path:"/login", 
            element:<AuthLayout/>,
        },
        {
            path:"*",
            element:<Error/>
        }
    ]

    export const router=createBrowserRouter([
        ...children
    ])
