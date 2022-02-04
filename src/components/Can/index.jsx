import { hasAccess } from '../../helpers/accessHelpers';

const Can = ({
  i: action,
  a: resource,
  as: role,
  fallback = null,
  children,
}) => {
  if (hasAccess({ action, resource, role })) {
    return children;
  }

  return fallback;
}

export default Can;
