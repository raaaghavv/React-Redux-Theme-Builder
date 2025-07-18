import React from "react";
import {
  DashboardIcon,
  CampaignsIcon,
  IntegrationsIcon,
  UsersIcon,
  BillingIcon,
  ThemesIcon,
  SwitchIcon,
  UserCircleIcon,
  SettingsIcon,
  LogoutIcon,
  CloseIcon,
} from "../icons/Icons";

const AppStorysLogo = () => (
  // ... (same as before, no changes needed here)
  <svg
    width="40"
    height="40"
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.5156 1.76902e-10C33.4221 6.14262e-10 36.8756 -0.000283471 39.5137 1.34375C41.8341 2.52608 43.7209 4.41299 44.9033 6.7334C46.2475 9.3715 46.2471 12.8255 46.2471 19.7324V26.5156C46.2471 33.4223 46.2474 36.8756 44.9033 39.5137C43.7209 41.8342 41.8342 43.7209 39.5137 44.9033C36.8756 46.2474 33.4223 46.2471 26.5156 46.2471H19.7324C12.8255 46.2471 9.3715 46.2475 6.7334 44.9033C4.41299 43.7209 2.52608 41.8341 1.34375 39.5137C-0.000282398 36.8756 6.53824e-10 33.4221 1.76902e-10 26.5156V19.7324C1.76902e-10 12.8255 -0.000430905 9.3715 1.34375 6.7334C2.52611 4.41294 4.41294 2.52611 6.7334 1.34375C9.3715 -0.000430905 12.8255 1.76902e-10 19.7324 1.76902e-10H26.5156ZM17.7871 10.8525C15.4026 10.8525 13.3589 11.0798 11.9111 12.5273C10.4634 13.9751 10.25 16.0048 10.25 18.375V29.333C10.25 31.7602 10.4633 33.7758 11.9111 35.2236C13.3589 36.6714 15.4029 36.8994 17.8301 36.8994H28.8584C31.2714 36.8994 33.3159 36.6714 34.7637 35.2236C36.2113 33.7758 36.4238 31.76 36.4238 29.333V19.667C35.7995 19.8798 35.1178 19.9937 34.4082 19.9795C34.309 19.9936 34.2379 19.9936 34.1387 20.0078V29.7168C34.1387 31.193 33.9541 32.6976 33.1025 33.5635C32.2366 34.4149 30.704 34.6133 29.2422 34.6133H17.4326C15.9708 34.6133 14.4377 34.4149 13.5859 33.5635C12.7201 32.6976 12.5352 31.193 12.5352 29.7168V18.0635C12.5352 16.5732 12.7198 15.0401 13.5713 14.1885C14.4371 13.3227 15.9843 13.1377 17.4746 13.1377H27.2686C27.2686 13.0385 27.2827 12.9532 27.2969 12.8682C27.2827 12.1585 27.3822 11.477 27.6094 10.8525H17.7871ZM34.1104 8.22656C31.4135 8.22667 29.1992 10.4555 29.1992 13.1523C29.1994 15.849 31.4136 18.077 34.1104 18.0771C36.8073 18.0771 39.036 15.8491 39.0361 13.1523C39.0361 10.4554 36.8214 8.22656 34.1104 8.22656Z"
      fill="#FD5F03"
    />
  </svg>
);

const NavLink = ({ icon, text, active}) => (
  <a
    href="#"
    className={`flex items-center p-3 my-1 mx-4 rounded-lg transition-colors ${
      active ? "bg-[#FD5F03] text-white" : "text-[#353535] hover:bg-orange-100"
    }`}
  >
    {icon}
     <span className="ml-4 text-sm font-semibold whitespace-nowrap md:hidden lg:inline">
      {text}
    </span>
  </a>
);

const StaticSidebar = ({ isMobileOpen, setMobileOpen }) => {
  // Define classes for each responsive state using Tailwind's prefixes.
  // This is the key to preventing the flash/glitch.
  const sidebarClasses = `
    bg-[#FFF3ED] h-screen flex flex-col py-4 border-r z-20
    fixed md:relative 
    w-64 md:w-20 lg:w-64
    transition-transform duration-300 ease-in-out
    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `;

  return (
    <aside className={sidebarClasses}>
      <div className="flex items-center justify-between mx-4 mb-8">
        <div className="flex items-center">
          <AppStorysLogo />
          {/* The text is hidden on tablet (md) and shown on desktop (lg) using CSS */}
          <span className="ml-3 text-xl font-bold text-[#FD5F03] md:hidden lg:inline">
            AppStorys
          </span>
        </div>
        {/* The close button is part of the mobile-only overlay */}
        <button onClick={() => setMobileOpen(false)} className="md:hidden">
          <CloseIcon />
        </button>
      </div>

      <nav className="flex-1">
        {/* The `isCollapsed` prop is no longer needed here. CSS handles it. */}
        <NavLink icon={<DashboardIcon />} text="Dashboard" active={true}/>
        <NavLink icon={<CampaignsIcon />} text="Campaigns" />
        <NavLink icon={<IntegrationsIcon />} text="Integrations" />
        <NavLink icon={<UsersIcon />} text="Cohorts" />
        <NavLink icon={<UsersIcon />} text="Manage Users" />
        <NavLink icon={<BillingIcon />} text="Billing" />
        <NavLink icon={<ThemesIcon />} text="Themes"  />
      </nav>

      <div className="mt-auto border-t border-gray-300 pt-2">
        <NavLink icon={<SwitchIcon />} text="Switch to Prod" />
        <NavLink icon={<UserCircleIcon />} text="Sarthak Srivastav" />
        <NavLink icon={<SettingsIcon />} text="Settings" />
        <NavLink icon={<LogoutIcon />} text="Logout" />
      </div>
    </aside>
  );
};

export default StaticSidebar;
