import { Activity, ArrowUpRight } from "lucide-react";
import { Card } from "@geenius-ui/react-css";
import "./AnalyticsPage.css";

const metrics = [
  { label: "Total Requests (24h)", value: "124,500", change: "+18%", icon: Activity },
  { label: "Cache Hit Rate", value: "72.4%", change: "+3.2%", icon: ArrowUpRight },
  { label: "Avg Latency", value: "450ms", change: "-12%", icon: Activity },
];

export default function AnalyticsPage() {
  return (
    <div className="an-page">
      <h1><Activity size={20} /> Analytics</h1>
      <div className="an-stats">{metrics.map(m => (
        <Card key={m.label} padding="lg" className="an-stat">
          <span className="an-stat-label">{m.label}</span>
          <span className="an-stat-value">{m.value}</span>
          <span className="an-stat-change">{m.change}</span>
        </Card>
      ))}</div>
      <Card padding="lg" className="an-chart">
        <h2>Request Volume (24h)</h2>
        <div style={{ height: 200, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-tertiary)" }}>
          <Activity size={32} style={{ opacity: 0.3 }} />
        </div>
      </Card>
    </div>
  );
}
