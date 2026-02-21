import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / docHeight) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="stitch-sidebar">
      <div
        className="needle"
        style={{ top: `${scrollPercent}%` }}
      ></div>

      <div className="stitch-line"></div>
    </div>
  );
};

export default Sidebar;