import Aboutsus from "../pages/Aboutsus"
import ExploreCourse from "../pages/ExploreCourse"
import Exploreuniversities from "../pages/Exploreuniversities"
import Error_page from "../pages/Header_files/Error_page"
import Login from "../pages/Header_files/Login"
import Site_map from "../pages/Header_files/Site_map"
import Home from "../pages/Home"
import RegForm from "../pages/RegForm"


const route = [
    { path: "/", name: "Dashboard", element: Home, exact: true },
    { path: "/about-us", name: "aboutus", element: Aboutsus, exact: true },
    { path: "/sitemap", name: "sitemap", element: Site_map, exact: true },
    { path: "/login", name: "login", element: Login, exact: true },
    { path: "/explore-courses", name: "courses", element: ExploreCourse, exact: true },
    { path: "*", name: "error", element: Error_page, exact: true },
]
export default route