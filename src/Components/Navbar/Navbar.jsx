import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-black mr-4' : ' text-[#F0EDCF] text-xl  font-bold  mr-4')}>Home</NavLink>
        <NavLink to='dashboard' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-black mr-4' : ' text-[#F0EDCF] text-xl  font-bold  mr-4')}>Dashboard</NavLink>
        <NavLink to='register' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-black mr-4' : ' text-[#F0EDCF] text-xl  font-bold  mr-4')}>Register</NavLink>
    </>
    return (
        <div className="navbar bg-[#40A2D8]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#40A2D8] rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <img className="h-[80px] w-[80px] object-fill rounded-full" src="https://i.ibb.co/Y8h1JSH/Task-wave-Logo.jpg" alt="" />
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;