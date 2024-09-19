import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
    const [current, setCurrent] = useState(localStorage.getItem("currentNavbarItem") || "dashboard");
    localStorage.setItem("currentNavbarItem", current);

    return (
        <>
            <Navbar
                current={current}
                setCurrent={setCurrent}
            />
        </>
    )
}