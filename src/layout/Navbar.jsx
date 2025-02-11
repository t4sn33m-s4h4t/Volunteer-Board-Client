
import {
  DarkThemeToggle,
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import HoverDropdown from "./HoverDropdown";
import { Link, NavLink, } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useAuth } from "../CustomHooks/useAuth";
import { useEffect, useState } from "react";

export default function NavbarComponent() {
  const { user, signOutUser, setUser } = useAuth();
  const [imgSrc, setImgSrc] = useState(user?.photoURL);
  useEffect(() => {
    setImgSrc(user?.photoURL)
  }, [user])

  const menus = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About Us",
      path: "/about-us"
    },
    {
      name: "All Volunteer Need Posts",
      path: "/all-posts"
    },
    {
      name: "My Profile",
      path: "/my-profile",
      secure: true,
      dropdown: true,
      menus: [
        {
          name: "Add Volunteer Need Post",
          path: "/add-post",
        },
        {
          name: "Manage My Posts",
          path: "/manage-posts",
        },
      ]
    },
    {
      name: "Contact",
      path: "/contact-us"
    },
  ]
  const DropdownNavLink = ({ subMenu }) => (
    <DropdownItem key={subMenu.path}>
      <NavLink
        to={subMenu.path}
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 font-bold dark:text-blue-400'
            : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
        }
      >
        {subMenu.name}
      </NavLink>
    </DropdownItem>
  );

  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar
      fluid
      id="navbar-container"
      className={`fixed top-0 w-full z-30 bg-white transition-all ${scrollActive ? "shadow-md py-2 bg-gray-800" : "py-6"
        }`}>
      <NavbarBrand >
        <Link to="/" className={`self-center whitespace-nowrap text-xl font-semibold dark:text-white  ${scrollActive && "text-white"}`}>Volunteer Board</Link>
      </NavbarBrand>
      <div className="flex md:order-2">
        {
          user?.email
            ?
            <HoverDropdown imgSrc={imgSrc} setImgSrc={setImgSrc} signOutUser={signOutUser} setUser={setUser} />
            :
            <Link to={`/login`} className="w-full text-center py-2 px-4 bg-sky-800 text-white font-medium rounded-lg shadow-md hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
              Login
            </Link>
        }

        <div>
        </div>
        <DarkThemeToggle className="mx-3" />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {
          menus.map((menu => {
            if (menu.secure && !user?.email) {
              return null;
            }
            return menu.dropdown ? (
              <Dropdown
                arrowIcon={false}
                inline
                key={menu.path}
                label={
                  <span className="text-gray-600 flex justify-center items-center hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    {menu.name}
                    <FaAngleDown />
                  </span>
                }
                dismissOnClick={false}
              >
                {
                  menu.menus.map(subMenu => {
                    return (
                      <DropdownNavLink key={subMenu.path} subMenu={subMenu} />
                    )
                  })
                }
              </Dropdown>
            ) : (
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? ` font-bold dark:text-blue-400 ${scrollActive ? "text-blue-400" : "text-blue-600"}`
                    : `dark:text-gray-400 dark:hover:text-blue-400 ${scrollActive ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`
                }
              >
                {menu.name}
              </NavLink>
            )
          }))
        }


      </NavbarCollapse>
    </Navbar>
  );
}
