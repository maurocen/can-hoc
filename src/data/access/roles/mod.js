const see = [
  'reports',
  'menu-items::users',
  'menu-items::profile'
];

const edit = [
  'comments:own',
];

const destroy = [
  'comments:own',
  'comments:users',
];

const accessLevels = {
  see,
  edit,
  destroy,
};

export default accessLevels;
