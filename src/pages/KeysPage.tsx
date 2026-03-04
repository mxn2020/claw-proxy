import { Key, Plus, Copy, Trash2 } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";
import "./KeysPage.css";

const keys = [
  { id: "k1", name: "Production", prefix: "cp_live_", created: "2 weeks ago", lastUsed: "Just now", requests: "42.1K", status: "active" as const },
  { id: "k2", name: "Staging", prefix: "cp_test_", created: "1 month ago", lastUsed: "3 hours ago", requests: "8.4K", status: "active" as const },
  { id: "k3", name: "Development", prefix: "cp_dev_", created: "2 months ago", lastUsed: "2 days ago", requests: "1.2K", status: "active" as const },
  { id: "k4", name: "Legacy", prefix: "cp_old_", created: "6 months ago", lastUsed: "1 month ago", requests: "0", status: "revoked" as const },
];

export default function KeysPage() {
  return (
    <div className="keys-page">
      <div className="keys-header"><h1><Key size={20} /> API Keys</h1><Button variant="primary" size="sm" icon={<Plus size={14} />}>New Key</Button></div>
      <div className="keys-list">{keys.map(k => (
        <Card key={k.id} padding="md" className="key-row">
          <div className="key-info">
            <strong>{k.name}</strong>
            <span className="mono" style={{ color: "var(--color-text-tertiary)", fontSize: "12px" }}>{k.prefix}••••••••</span>
          </div>
          <Badge variant={k.status === "active" ? "success" : "secondary"}>{k.status}</Badge>
          <span className="mono" style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{k.requests} requests</span>
          <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>Last: {k.lastUsed}</span>
          <div className="key-actions">
            <Button variant="ghost" size="sm" icon={<Copy size={14} />} />
            <Button variant="ghost" size="sm" icon={<Trash2 size={14} />} />
          </div>
        </Card>
      ))}</div>
    </div>
  );
}
