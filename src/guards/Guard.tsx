import React from "react";
import { useAccess } from "../hooks/useAccess";

type GuardProps = {
    permissions?: [string, string][]; // [action, resource]
    roles?: string[];
    fallback?: React.ReactNode;
    children: React.ReactNode;
};

export const Guard = ({ permissions, roles, fallback = null, children }: GuardProps) => {
    const { can, hasRole } = useAccess();

    const isAllowed =
        (permissions && permissions.every(([a, r]) => can(a, r))) ||
        (roles && roles.every(hasRole));

    return isAllowed ? <>{children}</> : <>{fallback}</>;
};
