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

const GenericLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
      stroke="#FD5F03"
      strokeWidth="2"
    />
    <path
      d="M12 21a9 9 0 0 0 0-18V3"
      stroke="#FD5F03"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const NavLink = ({ icon, text, active }) => (
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
  const sidebarClasses = `
    bg-[#FFF3ED] h-screen flex flex-col py-4 border-r z-30
    fixed md:relative 
    w-64 md:w-20 lg:w-64
    transition-transform duration-300 ease-in-out
    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `;

  return (
    <aside className={sidebarClasses}>
      <div className="flex items-center justify-between mx-4 mb-8 lg:justify-start">
        <div className="flex items-center md:w-full md:justify-center lg:w-auto">
          <GenericLogo />
          <span className="ml-3 text-xl font-bold text-[#FD5F03] md:hidden lg:inline">
            Theme Builder
          </span>
        </div>
        <button onClick={() => setMobileOpen(false)} className="md:hidden">
          <CloseIcon />
        </button>
      </div>

      <nav className="flex-1">
        <NavLink icon={<DashboardIcon />} text="Dashboard" />
        <NavLink icon={<CampaignsIcon />} text="Campaigns" />
        <NavLink icon={<IntegrationsIcon />} text="Integrations" />
        <NavLink icon={<UsersIcon />} text="Cohorts" />
        <NavLink icon={<UsersIcon />} text="Manage Users" />
        <NavLink icon={<BillingIcon />} text="Billing" />
        <NavLink icon={<ThemesIcon />} text="Themes" active={true} />
      </nav>

      <div className="mt-auto border-t border-gray-300 pt-2">
        <NavLink icon={<SwitchIcon />} text="Switch to Prod" />
        <NavLink icon={<UserCircleIcon />} text="Your Name" />
        <NavLink icon={<SettingsIcon />} text="Settings" />
        <NavLink icon={<LogoutIcon />} text="Logout" />
      </div>
    </aside>
  );
};

export default StaticSidebar;
