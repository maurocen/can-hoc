const see = [
  'reports',
  'data:admin',
  'quarterly-reports',
  'menu-items::reports',
  'menu-items::users',
  'menu-items::profile'
];

const edit = [
  'comments::own',
  'comments::mods',
  'comments::users',
];

const destroy = [
  'comments::own',
  'comments::users',
  'comments::mods',
  'users',
  'mods',
];

const accessLevels = {
  see,
  edit,
  destroy,
};

export default accessLevels;
