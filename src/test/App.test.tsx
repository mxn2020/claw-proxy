import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";
import TrafficPage from "../pages/TrafficPage";
import RoutesPage from "../pages/RoutesPage";
import KeysPage from "../pages/KeysPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import SettingsPage from "../pages/SettingsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("ThemeToggle", () => { it("renders", () => { render(<ThemeToggle />); expect(screen.getByRole("button")).toBeInTheDocument(); }); });
describe("Header", () => { it("renders nav", () => { wrap(<Header />); expect(screen.getByText("Traffic")).toBeInTheDocument(); expect(screen.getByText("Routes")).toBeInTheDocument(); }); });
describe("TrafficPage", () => {
  it("renders", () => { wrap(<TrafficPage />); expect(screen.getByText("Live Traffic")).toBeInTheDocument(); });
  it("shows stats", () => { wrap(<TrafficPage />); expect(screen.getByText("Requests/min")).toBeInTheDocument(); });
  it("shows requests", () => { wrap(<TrafficPage />); expect(screen.getAllByText("/v1/chat/completions").length).toBeGreaterThan(0); });
});
describe("RoutesPage", () => { it("renders", () => { wrap(<RoutesPage />); expect(screen.getAllByText("Routes").length).toBeGreaterThan(0); }); });
describe("KeysPage", () => { it("renders", () => { wrap(<KeysPage />); expect(screen.getByText("API Keys")).toBeInTheDocument(); expect(screen.getByText("Production Key")).toBeInTheDocument(); }); });
describe("AnalyticsPage", () => { it("renders", () => { wrap(<AnalyticsPage />); expect(screen.getByText("Analytics")).toBeInTheDocument(); }); });
describe("SettingsPage", () => { it("renders", () => { wrap(<SettingsPage />); expect(screen.getByText("Rate Limiting")).toBeInTheDocument(); }); });
