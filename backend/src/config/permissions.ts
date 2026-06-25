export const RolePermissions = {
  head_admin: ['*'], // Superuser
  admin: [
    'admin:roles:view',
    'admin:roles:assign',
    'admin:roles:revoke',
    'admin:audit:view',
    'admin:entity:create',
    'admin:entity:view',
    'admin:entity:update',
    'admin:entity:delete',
    'admin:article:create',
    'admin:article:view',
    'admin:article:update',
    'admin:article:delete',
    'admin:article:approve',
    'admin:graph:create',
    'admin:graph:update',
    'admin:graph:delete',
    'admin:relationship:create',
    'admin:relationship:delete',
    // 'admin:ontology:create' -- Restricted to Head Admin
    'admin:ontology:update',
    'admin:ontology:approve'
  ],
  editor: [
    'admin:entity:view',
    'admin:article:create',
    'admin:article:view',
    'admin:article:update',
  ],
  researcher: [
    'admin:entity:view',
    'admin:article:view',
  ],
  user: [
    'admin:entity:view'
  ]
};
