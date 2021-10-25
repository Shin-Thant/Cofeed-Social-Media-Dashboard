import React from "react";
import "./accessories.css";

import PersonalData from "./PersonalData";

const Accounts = ({ name, ig, image }) => {
    return (
        <div className="acc">
            <div className="acc-img">
                <img src={image} alt="" />
            </div>
            <div className="person">
                <h4>{name}</h4>
                <div>{ig}</div>
            </div>
            <button className="follow-btn">Follow</button>
        </div>
    );
};

const Other = (props) => {
    return (
        <div className="accessories-container">
            <div className="accessories">
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="noti-btn">
                    <i className="fas fa-bell"></i>
                </div>
                <div className="upload-btn">
                    <i className="fas fa-cloud-upload-alt"></i>
                </div>
            </div>
            <div className="suggestions">
                <div className="suggestions-header">
                    <h4>Suggestions For You</h4>
                    <h4 className="see-all">See all</h4>
                </div>
                <div className="acc-container">
                    <Accounts
                        name={PersonalData[1].name}
                        ig={PersonalData[1].insta}
                        image={PersonalData[1].image}
                    />
                    <Accounts
                        name={PersonalData[2].name}
                        ig={PersonalData[2].insta}
                        image={PersonalData[2].image}
                    />
                    <Accounts
                        name={PersonalData[3].name}
                        ig={PersonalData[3].insta}
                        image={PersonalData[3].image}
                    />
                </div>

                <div className="divider"></div>

                <h4>Latest Post Activity</h4>

                <div className="prev-post-container">
                    <div className="prev-post">
                        <div className="prev-post-img-container">
                            <img
                                src="https://images.unsplash.com/photo-1570808370686-e73cd6b8257d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
                                alt=""
                            />
                        </div>
                        <div className="prev-post-info">
                            <h5>Minimalist Stairs</h5>
                            <div className="actions">
                                <div>
                                    <i className="fas fa-heart"></i>
                                    <span>27</span>
                                </div>
                                <div style={{}}>
                                    <i className="fas fa-comment-dots"></i>
                                    <span>12</span>
                                </div>
                                <div>
                                    <i className="fas fa-bookmark"></i>
                                    <span>6</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="see-all-posts">See All Posts</h5>
                </div>
            </div>
        </div>
    );
};

export default Other;
