import React, { createContext, useContext } from "react";
import { AccessContextType, Role, Permission } from "../types/access";

const AccessContext = createContext<AccessContextType | undefined>(undefined);

export const AccessProvider = ({
    roles,
    permissions,
    children,
}: {
    roles: Role[];
    permissions: Permission[];
    children: React.ReactNode;
}) => {
    const can = (action: string, resource: string) =>
        permissions.some(
            ([a, r]) => a === action && r === resource
        );

    const hasRole = (role: Role) => roles.includes(role);

    return (
        <AccessContext.Provider value={{ roles, permissions, can, hasRole }}>
            {children}
        </AccessContext.Provider>
    );
};

export const useAccessContext = () => {
    const context = useContext(AccessContext);
    if (!context) throw new Error("useAccessContext must be used within AccessProvider");
    return context;
};
