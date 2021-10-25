import React from "react";
import "./Main.css";
import PersonalData from "./PersonalData";

const PostImg = [
    {
        id: "1",
        name: "Janora",
        url: "https://images.unsplash.com/photo-1570808370686-e73cd6b8257d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
        userImg:
            "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        heart: 623,
        comment: 64,
    },
    {
        id: "2",
        name: "Alice",
        url: "https://images.unsplash.com/photo-1602332680200-fd30b3c88bd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80",
        userImg:
            "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        heart: 72,
        comment: 24,
    },
    {
        id: "3",
        name: "Austin",
        url: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80",
        userImg:
            "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        heart: 22,
        comment: 18,
    },
    {
        id: "4",
        name: "Auora",
        url: "https://images.unsplash.com/photo-1535640555174-c836c799d250?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
        userImg:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        heart: 48,
        comment: 16,
    },
];

const Stories = ({ imgURL, name }) => {
    return (
        <div className="story">
            <div className="story-img-container">
                <img src={imgURL} alt="" />
            </div>
            <h5 className="story-text-container">{name}</h5>
        </div>
    );
};

const Post = ({ url, userImg, name, heart, comment }) => {
    return (
        <div className="post">
            <div className="post-img-container">
                <img src={url} alt="" />
            </div>
            <div className="user-information">
                <div className="user-img-container">
                    <img src={userImg} alt="" className="user-img" />
                </div>

                <h4 style={{ flex: 1, cursor: "pointer" }}>{name}</h4>

                <div className="user-actions">
                    <div className="hearts">
                        <i className="fas fa-heart"></i>
                        <span>{heart}</span>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                        <i className="fas fa-comment-dots"></i>
                        <span>{comment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Main = (props) => {
    return (
        <div className="main-container">
            <div className="stories-container">
                {PersonalData.map((item) => (
                    <Stories
                        key={item.image}
                        imgURL={item.image}
                        name={item.name}
                    />
                ))}
            </div>
            <div className="divider"></div>
            <div className="feed-container">
                <div className="feed-header">
                    <h3>Feed</h3>
                    <div className="feed-type">
                        <h4>All</h4>
                        <h4>Following</h4>
                        <h4>Newest</h4>
                        <h4>Popular</h4>
                    </div>
                </div>

                <div className="post-container">
                    {PostImg.map((item) => (
                        <Post
                            key={item.url}
                            url={item.url}
                            userImg={item.userImg}
                            name={item.name}
                            heart={item.heart}
                            comment={item.comment}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
