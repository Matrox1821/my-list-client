import React from "react";
import "./styles.scss";
type Props = {
    src: string;
    username: string;
    description?: string;
};

const CardUser = ({ src, username, description }: Props) => {
    return (
        <div className="card_user">
            <img className="card_user__user_image" src={src} alt={username} />
            <div className="card_user__user_dates">
                <span className="card_user__username">{username}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default CardUser;
