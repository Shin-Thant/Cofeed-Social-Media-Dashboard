import React from "react";
import "./Nav.css";
import {
    home,
    message,
    profile,
    save,
    setting,
    cofeedLogo,
} from "../img/imageCollection";
import PersonalData from "./PersonalData";

const Accounts = ({ imgURL, name, ig }) => {
    return (
        <div className="account-container">
            <div className="user-img-container">
                <img src={imgURL} alt="" className="user-img" />
            </div>

            <div>
                <h3 className="user-name">{name}</h3>
                <div className="insta-accs">{ig}</div>
            </div>
        </div>
    );
};

const datas = [
    { name: "Home", image: home },
    { name: "Messages", image: message },
    { name: "Profile", image: profile },
    { name: "Saved Post", image: save },
    { name: "Settings", image: setting },
];

const NavTabs = (props) => {
    return datas.map((item) => (
        <div className="nav-tabs" key={item.name}>
            <img className="nav-icons" src={item.image} alt="" />
            <h4 className="nav-links">{item.name}</h4>
        </div>
    ));
};

const startAction = () => {
    let toggle_menu = document.querySelector(".toggle-menu");

    toggle_menu.classList.toggle("toggle-action");
};

const Nav = (props) => {
    return (
        <div className="nav-container">
            <div className="logo-section">
                <img src={cofeedLogo} alt="" className="logo" />
                <h2 className="brand-name">Cofeed</h2>
            </div>
            <div className="menu-section">
                <h3>Menu</h3>
                <div className="navtab-container">
                    <NavTabs />
                </div>
            </div>
            <div className="account-section">
                <details className="account-list">
                    <summary>
                        <h3>Account</h3>
                        <div className="toggle-menu" onClick={startAction}>
                            <div className="toggle"></div>
                        </div>
                    </summary>
                    <Accounts
                        imgURL={PersonalData[0].image}
                        name={PersonalData[0].name}
                        ig={PersonalData[0].insta}
                    />
                </details>
            </div>
        </div>
    );
};

export default Nav;
