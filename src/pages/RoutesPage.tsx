import { Shield, Plus } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";
import "./RoutesPage.css";

const routes = [
  { path: "/v1/chat/completions", providers: ["OpenAI", "Anthropic"], rateLimit: "100/min", cache: true, fallback: true },
  { path: "/v1/messages", providers: ["Anthropic"], rateLimit: "60/min", cache: false, fallback: false },
  { path: "/v1/embeddings", providers: ["OpenAI"], rateLimit: "500/min", cache: true, fallback: false },
  { path: "/v1/generate", providers: ["Google"], rateLimit: "200/min", cache: false, fallback: false },
  { path: "/v1/models", providers: ["OpenAI", "Anthropic", "Google"], rateLimit: "300/min", cache: true, fallback: false },
];

export default function RoutesPage() {
  return (
    <div className="rt-page">
      <div className="rt-header"><h1><Shield size={20} /> Routes</h1><Button variant="primary" size="sm" icon={<Plus size={14} />}>Add Route</Button></div>
      <div className="rt-list">{routes.map(r => (
        <Card key={r.path} padding="md" className="rt-card">
          <div className="rt-card-path" style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>{r.path}</div>
          <div className="rt-card-meta">
            <div>{r.providers.map(p => <Badge key={p} variant="info" size="sm">{p}</Badge>)}</div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-text-secondary)" }}>{r.rateLimit}</span>
            {r.cache && <Badge variant="success">Cached</Badge>}
            {r.fallback && <Badge variant="warning">Fallback</Badge>}
          </div>
        </Card>
      ))}</div>
    </div>
  );
}
