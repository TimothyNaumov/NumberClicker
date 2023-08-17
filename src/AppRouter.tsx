import { Routes, Route } from "react-router-dom";
import GameView from "./views/GameView";
import StatsView from "./views/Statistics/StatsView";
import { NoMatchView } from "./views/NoMatchView";
import AppLayout from "./AppLayout";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<GameView />} />
                <Route path="play" element={<GameView />} />
                <Route path="stats" element={<StatsView />} />
                <Route path="*" element={<NoMatchView />} />
            </Route>
      </Routes>
    );
  }