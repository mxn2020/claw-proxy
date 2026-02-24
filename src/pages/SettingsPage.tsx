import { Settings, Github, Coffee } from "lucide-react";
import "./SettingsPage.css";
export default function SettingsPage() {
  return (
    <div className="set-page">
      <h1><Settings size={20} /> Settings</h1>
      <section className="set-section card">
        <h2>Provider API Keys</h2>
        <div className="set-field"><label>OpenAI</label><input className="input" type="password" placeholder="sk-..." /></div>
        <div className="set-field"><label>Anthropic</label><input className="input" type="password" placeholder="sk-ant-..." /></div>
        <div className="set-field"><label>Google AI</label><input className="input" type="password" placeholder="AIza..." /></div>
      </section>
      <section className="set-section card">
        <h2>Rate Limiting</h2>
        <div className="set-field"><label>Global Rate Limit (req/min)</label><input className="input" type="number" defaultValue={1000} /></div>
        <div className="set-field"><label>Per-Key Limit (req/min)</label><input className="input" type="number" defaultValue={100} /></div>
      </section>
      <section className="set-section card">
        <h2>About</h2>
        <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", marginBottom: "var(--space-3)" }}>v0.1.0 · MIT License</p>
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <a href="https://github.com/mxn2020/claw-proxy" className="btn btn-sm" target="_blank" rel="noopener noreferrer"><Github size={14} /> GitHub</a>
          <a href="https://buymeacoffee.com/mxn2020" className="btn btn-sm" target="_blank" rel="noopener noreferrer"><Coffee size={14} /> Support</a>
        </div>
      </section>
    </div>
  );
}
