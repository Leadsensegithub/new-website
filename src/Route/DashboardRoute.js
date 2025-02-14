import DashboardHome from "../DashboardPage/DashboardHome"
import EMI_page from "../DashboardPage/EMI_page"
import Enrollment_details from "../DashboardPage/Enrollment_details"
import Offers_page from "../DashboardPage/Offers_page"
import DeleteAccount from '../DashboardPage/DeleteAccount'
import Error_page from "../pages/Header_files/Error_page"



const DashboardRoute = [
    { path: "/", name: "User Dashboard", element: DashboardHome, exact: true },
    { path: "/offerpage", name: "User Dashboard", element: Offers_page, exact: true },
    { path: "/emipage", name: "User Dashboard", element: EMI_page, exact: true },
    { path: "/enrollment", name: "User Dashboard", element:Enrollment_details, exact: true },
    // { path: "/deleteaccount", name: "User Dashboard", element:DeleteAccount, exact: true },   
    { path: "*", name: "error", element: Error_page, exact: true },
]
export default DashboardRoute