import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Books from "./Pages/Browsebook/Books";
import AddBooks from "./Pages/AddBooks/Addbooks";
import BookDetail from "./Pages/Bookdetail.jsx/BookDetail";
import BookPage from "./Component/BookPage";
import Error from "./Pages/Error/Error";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/browsebook',
                element:<Books />
            },{
                path:'/addbooks',
                element:<AddBooks />
            },{
                path:'/book/:id',
                element:<BookDetail />
            },{
                path:'/books/:catergory',
                element:<BookPage/>
            }
        ],
        errorElement:<Error />
    },
    
])

export default router;