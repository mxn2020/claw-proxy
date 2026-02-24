import { Shield, Plus } from "lucide-react";
import "./RoutesPage.css";
const routes = [
  { path: "/v1/chat/completions", providers: ["OpenAI", "Anthropic"], rateLimit: "100/min", cache: true, fallback: true },
  { path: "/v1/embeddings", providers: ["OpenAI"], rateLimit: "200/min", cache: true, fallback: false },
  { path: "/v1/messages", providers: ["Anthropic"], rateLimit: "60/min", cache: false, fallback: true },
  { path: "/v1/generate", providers: ["Google"], rateLimit: "80/min", cache: false, fallback: false },
  { path: "/v1/models", providers: ["OpenAI", "Anthropic", "Google"], rateLimit: "300/min", cache: true, fallback: false },
];
export default function RoutesPage() {
  return (
    <div className="rt-page">
      <div className="rt-header"><h1><Shield size={20} /> Routes</h1><button className="btn btn-primary btn-sm"><Plus size={14} /> Add Route</button></div>
      <div className="rt-list">{routes.map(r => (
        <div key={r.path} className="rt-card card">
          <div className="rt-card-path" style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>{r.path}</div>
          <div className="rt-card-meta">
            <div>{r.providers.map(p => <span key={p} className="badge badge-cyan" style={{ marginRight: 4 }}>{p}</span>)}</div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-text-secondary)" }}>{r.rateLimit}</span>
            {r.cache && <span className="badge badge-green">Cached</span>}
            {r.fallback && <span className="badge badge-neon">Fallback</span>}
          </div>
        </div>
      ))}</div>
    </div>
  );
}
