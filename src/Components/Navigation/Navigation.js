import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className={styles.navList}>
        <li className={styles.navLink}>
          <NavLink
            exact
            to={routes.home}
            activeClassName={styles.activeNavLink}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            exact
            to={routes.moviesView}
            activeClassName={styles.activeNavLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
