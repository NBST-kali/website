// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const AppNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="sticky top-0 z-50 sm:sticky">
//       {/* Mobile Navbar */}
//       <div className="sm:hidden flex items-center justify-between py-4 px-4 bg-white shadow-md ">
//         <a href="http://localhost:3000/">
//           <img src="/logo.png" alt="Logo" className="h-14 w-44" />
//         </a>
//         <button onClick={toggleSidebar} className="text-3xl focus:outline-none">
//           ☰
//         </button>
//       </div>

//       {/* Sidebar for Mobile */}
//       <div
//         className={`fixed top-[90px] right-0 h-full bg-gray-400  shadow-lg z-40 transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 sm:hidden w-64`}
//       >
//         <div className="flex flex-col p-6 space-y-6">
//           <NavLink
//             className="text-[#050419] font-normal no-underline hover:text-white hover:border-b border-red-500"
//             to={"/about"}
//             onClick={toggleSidebar}
//           >
//             About
//           </NavLink>
//           <NavLink
//             className="text-[#050419] font-normal no-underline hover:text-white hover:border-b border-red-500"
//             to={"/careers"}
//             onClick={toggleSidebar}
//           >
//             Careers{" "}
//           </NavLink>
//           <NavLink
//             className="text-[#050419] font-normal no-underline hover:text-white hover:border-b  border-red-500"
//             to={"/products"}
//             onClick={toggleSidebar}
//           >
//             Products
//           </NavLink>
//           <NavLink
//             className="text-[#050419] font-normal no-underline hover:text-white hover:border-b border-red-500"
//             to={"/services"}
//             onClick={toggleSidebar}
//           >
//             Services
//           </NavLink>
//           <button className="px-5 py-2 rounded-full text-white bg-[#050419]">
//             Get Consultant
//           </button>
//         </div>
//       </div>

//       {/* Navbar for Desktop */}
//       <div className="hidden sm:flex flex-col sm:flex-row text-xl justify-between py-4 px-4 sm:px-6 lg:px-16 w-full h-auto sm:h-[88px] bg-white shadow-md sticky top-0 z-50">
//         <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-center">
//           <a href="http://localhost:3000/">
//             <img
//               src="/logo.png"
//               alt="Logo"
//               className="h-14 w-44 sm:h-14 sm:w-56"
//             />
//           </a>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-4 sm:mt-0">
//             <NavLink
//               className="text-[#050419] font-normal no-underline hover:text-blue-500 hover:border-b border-red-500"
//               to={"/about"}
//             >
//               About
//             </NavLink>
//             <NavLink
//               className="text-[#050419] font-normal no-underline hover:text-blue-500 hover:border-b border-red-500"
//               to={"/careers"}
//             >
//               Careers
//             </NavLink>{" "}
//             <NavLink
//               className="text-[#050419] font-normal no-underline hover:text-blue-500 hover:border-b border-red-500"
//               to={"/products"}
//             >
//               {" "}
//               Products
//             </NavLink>
//             <NavLink
//               className="text-[#050419] font-normal no-underline hover:text-blue-500 hover:border-b border-red-500"
//               to={"/services"}
//             >
//               Services
//             </NavLink>
//           </div>
//         </div>
//         <div className="mt-4 sm:mt-0">
//           <button className="px-5 sm:px-7 py-2 sm:py-3 rounded-full text-white bg-[#050419] w-full sm:w-auto h-auto sm:h-[45px]">
//             <p className="font-semibold text-[14px] sm:text-[16px] leading-5">
//               Get Consultant
//             </p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppNavbar;

import React, { useState } from "react";
import { Drawer, Burger, Button, Group, Container } from "@mantine/core";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md ">
      {/* Mobile Navbar */}
      <Container className="sm:hidden flex justify-between items-center p-4">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="h-14 w-44" />
        </a>
        <Burger opened={isDrawerOpen} onClick={toggleDrawer} size="lg" />
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={isDrawerOpen}
        onClose={toggleDrawer}
        padding="lg"
        size="sm"
        className="sm:hidden"
      >
        <Group direction="column" spacing="xl">
          <NavLink to="/about" onClick={toggleDrawer}>
            About
          </NavLink>
          <NavLink to="/careers" onClick={toggleDrawer}>
            Careers
          </NavLink>
          <NavLink to="/products" onClick={toggleDrawer}>
            Products
          </NavLink>
          <NavLink to="/services" onClick={toggleDrawer}>
            Services
          </NavLink>
          <Button fullWidth>Get Consultant</Button>
        </Group>
      </Drawer>

      {/* Desktop Navbar */}
      <Container className="hidden sm:flex items-center justify-between p-4 w-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="h-14 w-44" />
          </a>
        </div>

        {/* Middle: Navigation Menu */}
        <div className="flex-grow flex justify-center">
          <Group spacing="xl">
            <NavLink
              to="/about"
              className="text-lg font-medium text-gray-700 hover:text-blue-600 border-b-indigo-500"
            >
              About
            </NavLink>
            <NavLink
              to="/careers"
              className="text-lg font-medium text-gray-700 hover:text-blue-600"
            >
              Careers
            </NavLink>
            <NavLink
              to="/products"
              className="text-lg font-medium text-gray-700 hover:text-blue-600"
            >
              Products
            </NavLink>
            <NavLink
              to="/services"
              className="text-lg font-medium text-gray-700 hover:text-blue-600"
            >
              Services
            </NavLink>
          </Group>
        </div>

        {/* Right: Button */}
        <div className="flex items-center">
          <Button
            radius="lg"
            size="lg"
            styles={(theme) => ({
              root: {
                background: "#050419",
                color: theme.white,
                fontWeight: 700,
                padding: "0.75rem 1.5rem",
                fontSize: theme.fontSizes.md,
                boxShadow: theme.shadows.sm,
                transition: "transform 0.2s ease-in-out, background 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(90deg, #6366f1, #3b82f6)",
                  transform: "scale(1.05)",
                },
              },
              label: {
                letterSpacing: "0.05em",
              },
            })}
          >
            Get Consultant
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default AppNavbar;
