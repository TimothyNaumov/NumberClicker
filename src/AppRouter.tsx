import { Routes, Route } from "react-router-dom";
import GameView from "./views/game/GameView";
import StatsView from "./views/statistics/StatsView";
import { NoMatchView } from "./views/NoMatchView";
import AppLayout from "./AppLayout";
import Leaderboardsview from "./views/leadersboards/LeadersboardsView";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<GameView />} />
        <Route path="stats/leaderboards" element={<Leaderboardsview />} />
        <Route path="stats/:uid" element={<StatsView />} />
        <Route path="*" element={<NoMatchView />} />
      </Route>
    </Routes>
  );
}
