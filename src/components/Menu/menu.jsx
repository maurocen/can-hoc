import Can from "../Can";
import logo from '../../logo.svg';

const menuItems = [
  {
    label: 'My Profile',
    key: 'profile',
    location: '/profile',
  },
  {
    label: 'All users',
    key: 'users',
    location: '/users',
  },
  {
    label: 'Quarterly reports',
    key: 'reports',
    location: '/reports',
  }
]

const Menu = ({ role }) => (
  <side className="menu">
    <img src={logo} alt="HOC Example" />
    {
      menuItems.map(({ label, key, location }) => (
        <Can
          i="see"
          a={`menu-items::${key}`}
          as={role}
        >
          <a href={location} className="menu__item">
            {label}
          </a>
        </Can>
      ))
    }
  </side>
);

export default Menu;
