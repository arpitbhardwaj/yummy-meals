import { Fragment } from "react";
import mealsImage from "../../assets/yummy-meals.jpg";
import classes from "./Header.module.css";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Yummy Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt=""/>
        </div>
    </Fragment>;
}

export default Header;