import Aboutsus from "../pages/Aboutsus"
import ExploreCourse from "../pages/ExploreCourse"
import Exploreuniversities from "../pages/Exploreuniversities"
import Error_page from "../pages/Header_files/Error_page"
import Login from "../pages/Header_files/Login"
import Site_map from "../pages/Header_files/Site_map"
import Home from "../pages/Home"
import RegForm from "../pages/RegForm"
import MBAcourse from "../PG Course/MBAcourse"
import MCAcourse from "../PG Course/MCAcourse"
import MCOMcourse from "../PG Course/MCOMcourse"
import MSCcourse from "../PG Course/MSCcourse"
import PGCourseHome from "../PG Course/PGCourseHome"
import BAcourse from "../UG Course/BAcourse"
import BBAcourse from "../UG Course/BBAcourse"
import BCAcourse from "../UG Course/BCAcourse"
import UGCourseHome from "../UG Course/UGCourseHome"


const route = [
    { path: "/", name: "Dashboard", element: Home, exact: true },
    { path: "/about-us", name: "aboutus", element: Aboutsus, exact: true },
    { path: "/sitemap", name: "sitemap", element: Site_map, exact: true },
    { path: "/login", name: "login", element: Login, exact: true },
    { path: "/explore-courses", name: "courses", element: ExploreCourse, exact: true },
    { path: "*", name: "error", element: Error_page, exact: true },
    { path: "/UGCourses", name: "UG", element: UGCourseHome, exact: true },
    { path: "UGCourses/BBA", name: "BBA", element: BBAcourse, exact: true },
    { path: "UGCourses/BCA", name: "BCA", element:BCAcourse, exact: true },
    { path: "UGCourses/BA", name: "BA", element:BAcourse, exact: true },
    { path: "/PGCourses", name: "PG", element:PGCourseHome, exact: true },
    { path: "/PGCourses/MBA", name: "MBA", element:MBAcourse, exact: true },
    { path: "/PGCourses/MCA", name: "MCA", element:MCAcourse, exact: true },
    { path: "/PGCourses/MCOM", name: "MCOM", element:MCOMcourse, exact: true },
    { path: "/PGCourses/MSC", name: "MSC", element:MSCcourse, exact: true },
]
export default route