import { Link, useLocation } from "react-router-dom";
import { Shield, Activity, Key, BarChart2, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";
const links = [
  { to: "/", icon: Activity, label: "Traffic" },
  { to: "/routes", icon: Shield, label: "Routes" },
  { to: "/keys", icon: Key, label: "API Keys" },
  { to: "/analytics", icon: BarChart2, label: "Analytics" },
  { to: "/settings", icon: Settings, label: "Settings" },
];
export default function Header() {
  const loc = useLocation();
  return (
    <header className="cp-header">
      <div className="cp-header-inner">
        <Link to="/" className="cp-logo"><Shield size={18} /><span>Claw<span className="gradient-text">Proxy</span></span></Link>
        <nav className="cp-nav">{links.map(l => (
          <Link key={l.to} to={l.to} className={`cp-nav-link ${loc.pathname === l.to ? "active" : ""}`}>
            <l.icon size={14} /><span>{l.label}</span>
          </Link>
        ))}</nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
