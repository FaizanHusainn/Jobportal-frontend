import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
      { name: "Find Jobs", url: "/find-jobs" },
      { name: "Find Talent", url: "/find-talent" },
      { name: "Upload Job", url: "/upload-jobs" },
      { name: "About Us", url: "/about" },
    ];
  
    const location = useLocation();
  
    return (
      <div className="flex gap-6">
        {links.map((link, index) => (
            // location.pathname will give use the current page url after domain name
          <div 
            key={index} 
            className={location.pathname === link.url ? "text-[#ffbd20]" : ""}
          >
            <Link to={link.url}>{link.name}</Link>
          </div>
        ))}
      </div>
    );
  };

export default NavLinks;