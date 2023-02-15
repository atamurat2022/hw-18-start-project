import { useSelector } from "react-redux";
import classes from "./Header.module.css";

const Header = () => {
  const isAuthorizen = useSelector((state) => state);

  console.log(isAuthorizen);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorizen && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
