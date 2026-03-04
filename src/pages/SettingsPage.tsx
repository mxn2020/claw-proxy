import { Settings, Github, Coffee } from "lucide-react";
import { Button, Card, Input, Label } from "@geenius-ui/react-css";
import "./SettingsPage.css";

export default function SettingsPage() {
  return (
    <div className="set-page">
      <h1><Settings size={20} /> Settings</h1>
      <Card padding="lg" className="set-section">
        <h2>Provider API Keys</h2>
        <div className="set-field"><Label>OpenAI</Label><Input type="password" placeholder="sk-..." /></div>
        <div className="set-field"><Label>Anthropic</Label><Input type="password" placeholder="sk-ant-..." /></div>
        <div className="set-field"><Label>Google AI</Label><Input type="password" placeholder="AIza..." /></div>
      </Card>
      <Card padding="lg" className="set-section">
        <h2>Rate Limiting</h2>
        <div className="set-field"><Label>Global Rate Limit (req/min)</Label><Input type="number" defaultValue={1000} /></div>
        <div className="set-field"><Label>Per-Key Limit (req/min)</Label><Input type="number" defaultValue={100} /></div>
      </Card>
      <Card padding="lg" className="set-section">
        <h2>About</h2>
        <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", marginBottom: "var(--space-3)" }}>v0.1.0 · MIT License</p>
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <a href="https://github.com/mxn2020/claw-proxy" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm" icon={<Github size={14} />}>GitHub</Button></a>
          <a href="https://buymeacoffee.com/mxn2020" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm" icon={<Coffee size={14} />}>Support</Button></a>
        </div>
      </Card>
    </div>
  );
}
