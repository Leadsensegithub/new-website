import Aboutsus from "../pages/Aboutsus"
import ExploreCourse from "../pages/ExploreCourse"
import Exploreuniversities from "../pages/Exploreuniversities"
import Login from "../pages/Header_files/Login"
import Site_map from "../pages/Header_files/Site_map"
import Home from "../pages/Home"
import RegForm from "../pages/RegForm"


const route = [
    { path: "/", name: "Dashboard", element: Home, exact: true },
    { path: "/about-us", name: "Dashboard", element: Aboutsus, exact: true },
    // { path: "/explore-uni", name: "Dashboard", element:Exploreuniversities, exact: true },
    { path: "/sitemap", name: "Dashboard", element: Site_map, exact: true },
    { path: "/login", name: "Dashboard", element: Login, exact: true },
    { path: "/explore-courses", name: "courses", element: ExploreCourse, exact: true },
    // { path: "/signin", name: "Dashboard", element: RegForm, exact: true },




]
export default route