export type Role = string;
export type Permission = [action: string, resource: string];

export interface AccessContextType {
  roles: Role[];
  permissions: Permission[];
  can: (action: string, resource: string) => boolean;
  hasRole: (role: Role) => boolean;
}
