import React, { useState } from 'react'
import { NavLink, Outlet , Link } from 'react-router-dom'



import "./Phishing.css"
import profile from "../../../assets/prrofile.png"

import {
    CircleCheck,
    ClipboardCheck,
    FileChartColumnIncreasing,
    LayoutGrid,
    Settings,
    Menu,
} from 'lucide-react'

export default function Phishing() {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <>

            {/* ================= HEADER ================= */}
            <header className='topbar'>

            <div className='left-section'>

                {/* Mobile open sidebar */}
                <button
                    className='btn text-white border-0 p-0 d-lg-none'
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileSidebar"
                >
                    <Menu size={28} />
                </button>

                {/* Desktop collapse */}
                <button
                    className='btn text-white border-0 p-0 d-none d-lg-block'
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <Menu size={28} />
                </button>

                <Link to="/GRC" className="text-decoration-none">
                    <h1 className="logo m-0">LumiSec</h1>
                </Link>

            </div>


                {/* RIGHT */}
                <div className='right-section'>

                <button className='btn add-btn text-white border-0'>
                    <i className="fa-solid fa-plus me-2"></i>
                    New Campaign
                </button>

                    <i className="fa-regular fa-bell notification-icon fs-5"></i>

                    <figure className='profile-figure mb-0'>

                        <img src={profile} alt="profile" />

                    </figure>

                </div>

            </header>

            {/* ================= LAYOUT ================= */}
            <div className='main-layout'>

                {/* DESKTOP SIDEBAR */}
                <aside className='d-none d-lg-block'>

                    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>

                        <SidebarLinks collapsed={collapsed} />

                    </div>

                </aside>

                {/* CONTENT */}
                <main className='content'>
                    <Outlet />
                </main>

            </div>

            {/* ================= MOBILE SIDEBAR (OFFCANVAS) ================= */}
            <div
                className="offcanvas offcanvas-start sidebar-offcanvas d-lg-none"
                tabIndex="-1"
                id="mobileSidebar"
            >

                <div className="offcanvas-body">

                    <SidebarLinks collapsed={false} />

                </div>

            </div>

        </>
    )
}

/* ================= SIDEBAR LINKS ================= */

function SidebarLinks({ collapsed }) {

    return (
        <nav className='d-flex flex-column gap-2'>

            <NavItem to="/Phishing" icon={<LayoutGrid size={22} />} text="Dashboard" collapsed={collapsed} />
            <NavItem to="/Phishing/Campaigns" icon={<CircleCheck size={22} />} text="Campaigns" collapsed={collapsed} />
            <NavItem to="/Phishing/EmailTemplates" icon={<FileChartColumnIncreasing size={22} />} text="Email Templates" collapsed={collapsed} />
            <NavItem to="/Phishing/Recipients" icon={<ClipboardCheck size={22} />} text="Recipients" collapsed={collapsed} />
            <NavItem to="/Phishing/Reports" icon={<Settings size={22} />} text="Reports" collapsed={collapsed} />
            <NavItem to="/Phishing/Settings" icon={<Settings size={22} />} text="Settings" collapsed={collapsed} />

        </nav>
    )
}

function NavItem({ to, icon, text, collapsed }) {

    return (
        <NavLink
            to={to}
            end={to === "/Phishing"}
            className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
            }
        >

            <span className='icon'>
                {icon}
            </span>

            {!collapsed && (
                <span className='text'>
                    {text}
                </span>
            )}

        </NavLink>
    )
}