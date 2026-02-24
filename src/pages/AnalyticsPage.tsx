import { BarChart2 } from "lucide-react";
import "./AnalyticsPage.css";
const providerStats = [
  { provider: "OpenAI", requests: 28400, tokens: 890000, cost: "$42.50", avgLatency: "380ms", errorRate: "1.2%" },
  { provider: "Anthropic", requests: 12200, tokens: 540000, cost: "$28.90", avgLatency: "720ms", errorRate: "0.8%" },
  { provider: "Google", requests: 5800, tokens: 280000, cost: "$12.40", avgLatency: "520ms", errorRate: "2.1%" },
];
export default function AnalyticsPage() {
  return (
    <div className="an-page">
      <h1><BarChart2 size={20} /> Analytics</h1>
      <p style={{ color: "var(--color-text-secondary)", fontSize: "var(--font-size-sm)", marginBottom: "var(--space-6)" }}>API usage breakdown by provider (last 24h)</p>
      <div className="an-grid">{providerStats.map(p => (
        <div key={p.provider} className="an-card card">
          <h3>{p.provider}</h3>
          <div className="an-stats">
            <div><span className="an-val">{p.requests.toLocaleString()}</span><span className="an-label">Requests</span></div>
            <div><span className="an-val">{(p.tokens/1000).toFixed(0)}K</span><span className="an-label">Tokens</span></div>
            <div><span className="an-val">{p.cost}</span><span className="an-label">Cost</span></div>
            <div><span className="an-val">{p.avgLatency}</span><span className="an-label">Avg Latency</span></div>
            <div><span className="an-val">{p.errorRate}</span><span className="an-label">Error Rate</span></div>
          </div>
        </div>
      ))}</div>
    </div>
  );
}
