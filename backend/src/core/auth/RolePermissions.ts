import { UserRole } from "../../types/user";
import { Permission } from "../../types/permission";

export const ROLE_PERMISSIONS:
Record<UserRole, Permission> = {

  super_admin: {
    createEntity: true,
    updateEntity: true,
    deleteEntity: true,
    createArticle: true,
    updateArticle: true,
    deleteArticle: true,
    manageUsers: true,
    manageRoles: true,
    manageSystem: true
  },

  admin: {
    createEntity: true,
    updateEntity: true,
    deleteEntity: false,
    createArticle: true,
    updateArticle: true,
    deleteArticle: false,
    manageUsers: true,
    manageRoles: false,
    manageSystem: false
  },

  editor: {
    createEntity: true,
    updateEntity: true,
    deleteEntity: false,
    createArticle: true,
    updateArticle: true,
    deleteArticle: false,
    manageUsers: false,
    manageRoles: false,
    manageSystem: false
  },

  moderator: {
    createEntity: false,
    updateEntity: true,
    deleteEntity: false,
    createArticle: false,
    updateArticle: true,
    deleteArticle: false,
    manageUsers: false,
    manageRoles: false,
    manageSystem: false
  },

  user: {
    createEntity: false,
    updateEntity: false,
    deleteEntity: false,
    createArticle: false,
    updateArticle: false,
    deleteArticle: false,
    manageUsers: false,
    manageRoles: false,
    manageSystem: false
  }
};
