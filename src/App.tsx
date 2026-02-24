import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import TrafficPage from "./pages/TrafficPage";
import RoutesPage from "./pages/RoutesPage";
import KeysPage from "./pages/KeysPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
function Layout() { return (<><Header /><Outlet /></>); }
export default function App() {
  return (<BrowserRouter><Routes><Route element={<Layout />}>
    <Route path="/" element={<TrafficPage />} />
    <Route path="/routes" element={<RoutesPage />} />
    <Route path="/keys" element={<KeysPage />} />
    <Route path="/analytics" element={<AnalyticsPage />} />
    <Route path="/settings" element={<SettingsPage />} />
  </Route></Routes></BrowserRouter>);
}
