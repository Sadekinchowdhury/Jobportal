import { createBrowserRouter } from "react-router-dom";
import Main from "../Laout/Main";
import PersonalProfile from "../Pages/PersonalProfile/PersonalProfile";
import CompanyProfile from "../Pages/CompanyProfile/CompanyProfile";
import Jobe from "../Pages/Job/Jobe";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <PersonalProfile></PersonalProfile>
            },
            {
                path: '/companyProfile',
                element: <CompanyProfile></CompanyProfile>
            },
            {
                path: '/job',
                element: <Jobe></Jobe>
            }

        ]
    }
])
export default Routes;