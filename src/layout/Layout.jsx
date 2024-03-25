import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {
    return (
        <main className="container mx-auto work-sans">
            <Navbar/>
            <Outlet/>
        </main>
    );
};

export default Layout;