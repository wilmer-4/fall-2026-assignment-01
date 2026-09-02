export type AdminUser = {
  adminId: string
  permissions: string[] //need to hold multiple
}; //create admin user

export type GuestUser = {
  guestToken: string
  expiresAt: Date
}; //create GuestUser

export function isAdmin(user: AdminUser | GuestUser): user is AdminUser {
  return "adminId" in user;
} //are you an admin?

export function extractAdmins(
  users: Array<AdminUser | GuestUser>,
): AdminUser[] {
  return users.filter(user => isAdmin(user)); //filter to keep admin
}
