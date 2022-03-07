function isIncludeInAuthorizedRoles(userRole: string) {
  const authorizedRoles = ["admin", "mod"];

  return authorizedRoles.includes(userRole);
}

export default isIncludeInAuthorizedRoles;
