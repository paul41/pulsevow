import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import type { JSX } from "react";

export const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return user ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};