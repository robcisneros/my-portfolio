import Link from 'next/link';
import ActiveLink from '../ActiveLink/ActiveLink';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Portfolio</div>
      <nav>
        <ul>
          <li>
            <ActiveLink href='/'>All projects</ActiveLink>
          </li>
          <li>
            <ActiveLink href='/contact'>Contact</ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
