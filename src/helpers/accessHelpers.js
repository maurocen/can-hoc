import accessLevels from "../data/access";

export const hasAccess = ({ resource, action, role }) => {
  if (!accessLevels[role]?.[action]) {
    return false;
  }

  return accessLevels[role][action].findIndex((resourceItem) => resourceItem === resource) !== -1;
};
