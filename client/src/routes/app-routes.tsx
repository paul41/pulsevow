import { Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import ForYouPage from "../pages/for-you";
import HomePage from "../pages/home";
import  Profile  from "../pages/profile";
import { ProtectedRoute } from "./protected-routes";
import MonthlyBriefPage from "../pages/monthly-brief";
import { NotFound } from "../components/common/NotFound";
import Category from "../pages/category";

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

            <Route
                path="/for-you"
                element={<ForYouPage />}
            />   

            <Route
                path="/search"
                element={<Category />}
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