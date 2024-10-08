import React, { useContext } from "react";
import logo from "../../../images/logo-crop.png";
import { AuthContext } from "../../../contexts/AuthContext";
import "./newscard.css";

export const NewsCard = ({
    news,
    handleDeleteClick,
    handleOpenAddModal,
    handleOpenModal,
}) => {
    const { user } = useContext(AuthContext);
    const date = news.created_date.split("T")[0].split("-");
    const currDate = date[2] + "." + date[1] + "." + date[0];
    const value = localStorage.getItem('theme');

    const borderColor = value === 'light' ? '#00000033' : '#9e9e9e33';
    const boxShadow = value === 'light' ? '0px 4px 6px #00000033' : '0px 4px 6px #9e9e9e33';
    const bckColor = value === 'light' ? '#f9f9f9' : '#121212';
    const txtColor = value === 'light' ? 'black' : 'white';

    return (
        <div key={news.id} className="news-card" style={{boxShadow: `${boxShadow}`, backgroundColor: `${bckColor}`, border: `1px solid ${borderColor}`}}>

            <img
                src={news.image ? news.image : logo}
                alt="news"
                className={news.image ? "news-image" : "news-image--logo"}
            />
            
            <h2 className="news-title">{news.title}</h2>
            <p className="news-date">Objavljeno: {currDate};</p>
            <p className="news-content short-content" style={{color: `${txtColor}`}}>
                {news.content.slice(0, 100)}...
            </p>
            <div className="news-btn-div">
                <button
                    className="read-more-btn"
                    onClick={() => handleOpenModal(news)}
                >
                    Pročitaj više
                </button>
                {user && user.role_type === "Admin" ? (
                    <div>
                        <button
                            className="news-admin-btn"
                            id="dugme"
                            onClick={(e) => {
                                handleDeleteClick(e, news.id);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.1}
                                stroke="currentColor"
                                className="admin-icon"
                                id="newicn"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </button>
                        <button
                            className="news-admin-btn"
                            id="dugme"
                            onClick={() => handleOpenAddModal(news)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.1}
                                stroke="currentColor"
                                className="admin-icon"
                                id="newicn"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                            </svg>
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
