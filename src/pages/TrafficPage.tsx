import { Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";
import "./TrafficPage.css";
const reqs = [
  { id: "1", time: "10:45:32", method: "POST", path: "/v1/chat/completions", status: 200, latency: "420ms", provider: "OpenAI", tokens: 1240 },
  { id: "2", time: "10:45:31", method: "POST", path: "/v1/messages", status: 200, latency: "890ms", provider: "Anthropic", tokens: 2100 },
  { id: "3", time: "10:45:30", method: "POST", path: "/v1/chat/completions", status: 429, latency: "12ms", provider: "OpenAI", tokens: 0 },
  { id: "4", time: "10:45:29", method: "POST", path: "/v1/embeddings", status: 200, latency: "180ms", provider: "OpenAI", tokens: 820 },
  { id: "5", time: "10:45:28", method: "POST", path: "/v1/messages", status: 200, latency: "1200ms", provider: "Anthropic", tokens: 3400 },
  { id: "6", time: "10:45:27", method: "POST", path: "/v1/generate", status: 200, latency: "650ms", provider: "Google", tokens: 1800 },
  { id: "7", time: "10:45:26", method: "POST", path: "/v1/chat/completions", status: 500, latency: "95ms", provider: "OpenAI", tokens: 0 },
  { id: "8", time: "10:45:25", method: "GET", path: "/v1/models", status: 200, latency: "45ms", provider: "OpenAI", tokens: 0 },
];
const stats = [
  { label: "Requests/min", value: "342", change: "+12%", up: true },
  { label: "Avg Latency", value: "450ms", change: "-8%", up: false },
  { label: "Error Rate", value: "1.8%", change: "+0.3%", up: true },
  { label: "Total Tokens", value: "1.2M", change: "+15%", up: true },
];
function StatusBadge({ code }: { code: number }) {
  if (code >= 200 && code < 300) return <span className="badge badge-green">{code}</span>;
  if (code === 429) return <span className="badge badge-neon">{code}</span>;
  return <span className="badge badge-red">{code}</span>;
}
export default function TrafficPage() {
  return (
    <div className="tp-page">
      <h1><Activity size={20} /> Live Traffic</h1>
      <div className="tp-stats">{stats.map(s => (
        <div key={s.label} className="tp-stat card">
          <span className="tp-stat-label">{s.label}</span>
          <span className="tp-stat-value">{s.value}</span>
          <span className={`tp-stat-change ${s.up ? "up" : "down"}`}>
            {s.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}{s.change}
          </span>
        </div>
      ))}</div>
      <div className="tp-table card">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead><tr>
            <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", borderBottom: "2px solid var(--color-border-strong)" }}>Time</th>
            <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", borderBottom: "2px solid var(--color-border-strong)" }}>Method</th>
            <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", borderBottom: "2px solid var(--color-border-strong)" }}>Path</th>
            <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", borderBottom: "2px solid var(--color-border-strong)" }}>Status</th>
            <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", borderBottom: "2px solid var(--color-border-strong)" }}>Latency</th>
            <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", borderBottom: "2px solid var(--color-border-strong)" }}>Provider</th>
            <th style={{ textAlign: "left", padding: "8px 12px", fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", borderBottom: "2px solid var(--color-border-strong)" }}>Tokens</th>
          </tr></thead>
          <tbody>{reqs.map(r => (
            <tr key={r.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
              <td style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--color-text-tertiary)" }}>{r.time}</td>
              <td style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 600 }}>{r.method}</td>
              <td style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: "13px" }}>{r.path}</td>
              <td style={{ padding: "8px 12px" }}><StatusBadge code={r.status} /></td>
              <td style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--color-text-secondary)" }}>{r.latency}</td>
              <td style={{ padding: "8px 12px", fontSize: "13px", color: "var(--color-accent-secondary)" }}>{r.provider}</td>
              <td style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--color-text-secondary)" }}>{r.tokens.toLocaleString()}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
