import { Key, Plus, Eye, EyeOff } from "lucide-react";
import "./KeysPage.css";
const keys = [
  { name: "Production Key", prefix: "cpx_prod_****3f2a", created: "2 weeks ago", lastUsed: "Just now", requests: 42891 },
  { name: "Development Key", prefix: "cpx_dev_****8c1b", created: "1 month ago", lastUsed: "3 hours ago", requests: 8452 },
  { name: "Staging Key", prefix: "cpx_stg_****5d4e", created: "3 days ago", lastUsed: "Yesterday", requests: 1203 },
];
export default function KeysPage() {
  return (
    <div className="kp-page">
      <div className="kp-header"><h1><Key size={20} /> API Keys</h1><button className="btn btn-primary btn-sm"><Plus size={14} /> Generate Key</button></div>
      <div className="kp-list">{keys.map(k => (
        <div key={k.prefix} className="kp-card card">
          <div className="kp-card-top"><strong>{k.name}</strong><button className="btn btn-sm btn-ghost"><EyeOff size={14} /></button></div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--color-accent-secondary)", marginBottom: "var(--space-3)" }}>{k.prefix}</div>
          <div className="kp-card-stats">
            <span>Created: {k.created}</span><span>Last used: {k.lastUsed}</span>
            <span style={{ fontFamily: "var(--font-mono)" }}>{k.requests.toLocaleString()} requests</span>
          </div>
        </div>
      ))}</div>
    </div>
  );
}
