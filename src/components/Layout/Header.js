import React from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

function Header() {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="meals-image"/>
            </div>
        </React.Fragment>
    )
}

export default Header;