import App from "../App";
import Auth from "../auth/Auth";
import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";

const routes = [
    {
      path: "/",
      element:<Auth isSignedIn={true}><Login/></Auth>,
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    }
  ];


  export default routes