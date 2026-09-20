import { Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import HomePage from "../pages/home";
import EventInsightPage from "../pages/insights";
import  Profile  from "../pages/profile";

import { ProtectedRoute } from "./protected-routes";

// New PulseVow pages
// import SectorIntelligencePage from "../pages/sector-intelligence";
import MonthlyBriefPage from "../pages/monthly-brief";
import { NotFound } from "../components/common/NotFound";

export default function AppRoutes() {
    return (
        <Routes>

            {/* =========================
                PUBLIC ROUTES
            ========================== */}

            {/* Today's Pulse */}
            <Route
                path="/"
                element={<HomePage />}
            />

            {/* Authentication */}
            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            {/* Individual News / Event Intelligence */}
            <Route
                path="/pulse-insights"
                element={<EventInsightPage />}
            />

            {/* Optional: support direct story URLs later */}
            <Route
                path="/pulse-insights/:storyId"
                element={<EventInsightPage />}
            />

            {/* Sector Intelligence */}
            {/* <Route
                path="/sector-intelligence"
                element={<SectorIntelligencePage />}
            />

            {/* Monthly Intelligence + Podcasts */}
            <Route
                path="/monthly-brief"
                element={<MonthlyBriefPage />}
            /> 


            {/* =========================
                PROTECTED ROUTES
            ========================== */}

            {/* User Settings / Personalization */}
            <Route
                path="/my-profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />


            {/* =========================
                FALLBACK
            ========================== */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}