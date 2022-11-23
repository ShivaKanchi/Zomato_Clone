import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const SmallNavbar = ({ user, isDropdownOpen, setIsDropdownOpen }) => {
    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <div className="w-28">
                <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="ZomatoLogo"
                    className="w-full h-full"
                />
            </div>
            <div className="flex items-center gap-3 relative">
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
                    Use App
                </button>
                {user?.fullname ? (
                    <>
                        <div
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full cursor-pointer"
                        >
                            <img
                                src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                                alt="Avatar"
                                className="w-full h-full rounded-full  object-fill"
                            />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute shadow-lg py-3 -bottom-14 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                                <button>Sign Out</button>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <span
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="border p-2 border-gray-400 rounded-full"
                        >
                            <FaUserAlt className="w-full h-full" />
                        </span>

                        {isDropdownOpen && (
                            <div className="absolute shadow-lg py-3 -bottom-24 w-full z-20 flex flex-col gap-2 bg-white border border-gray-200">
                                <button>Sign In</button>
                                <button>Sign Up</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const LargeNavbar = ({ user, isDropdownOpen, setIsDropdownOpen }) => {
    return (
        <div className="w-full items-center justify-between hidden lg:flex px-14">
            <div className="gap-4  items-center justify-around flex">
                <div className="w-20">
                    <img
                        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
                <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                    <span className="text-zomato-400">
                        <HiLocationMarker />
                    </span>
                    <input
                        type="text"
                        placeholder="Mumbai"
                        className="w-full focus:outline-none"
                    />
                    <IoMdArrowDropdown />
                </div>

                <div className="flex w-full items-center gap-2">
                    <RiSearch2Line />
                    <input
                        type="search"
                        placeholder="Search for restaurant, cuisine or a dish"
                        className="w-full focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3 relative">
                {user?.fullname ? (
                    <>
                        <div
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full cursor-pointer"
                        >
                            <img
                                src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                                alt="avatar"
                                className="w-full h-full rounded-full object-fill"
                            />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute shadow-lg py-3 -bottom-14 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                                <button>Sign Out</button>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <span
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="border p-2 border-gray-400 rounded-full"
                        >
                            <FaUserAlt className="w-full h-full" />
                        </span>

                        {isDropdownOpen && (
                            <div className="absolute shadow-lg py-3 -bottom-24 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                                <button>Sign In</button>
                                <button>Sign Up</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = {
        fullname: "Shiva",
    };
    return (
        <>
            <nav className="p-4 lg:py-2 flex bg-white shadow-md lg:shadow-none lg:border-b-2 border-gray-100 w-full items-center">
                {/* for mobiles */}
                <SmallNavbar
                    user={user}
                    setIsDropdownOpen={setIsDropdownOpen}
                    isDropdownOpen={isDropdownOpen}
                />
                {/* for large screens */}
                <LargeNavbar
                    user={user}
                    setIsDropdownOpen={setIsDropdownOpen}
                    isDropdownOpen={isDropdownOpen}
                />
            </nav>
        </>
    );
};

export default Navbar;