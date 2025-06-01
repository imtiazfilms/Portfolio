import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const Layout = () => {
    return (
        <div className="bg-[#121635]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout