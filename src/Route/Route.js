import Aboutsus from "../pages/Aboutsus"
import Exploreuniversities from "../pages/Exploreuniversities"
import Home from "../pages/Home"


const route = [
    { path: "/", name: "Dashboard", element: Home, exact: true },
    { path: "/about-us", name: "Dashboard", element: Aboutsus, exact: true },
    // { path: "/explore-uni", name: "Dashboard", element:Exploreuniversities, exact: true },
    

]
export default route