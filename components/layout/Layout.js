import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import CollapseNavbar from './CollapseNavbar';

function Layout(props) {
  return (
    <div>
      {/* <MainNavigation /> */}
      <CollapseNavbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
