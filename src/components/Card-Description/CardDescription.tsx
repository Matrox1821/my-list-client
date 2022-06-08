import React from "react";
import "./styles.scss";
type Props = {
    title: string;
    src: string;
};
const CardDescription = ({ title, src }: Props) => {
    return (
        <div className="card_description">
            <div className="card_description__containerImage">
                <img src={src} alt={title} />
            </div>
            <div className="card_description__title">
                Eminencia de las Sombras
            </div>
            <div className="card_description__descriptionAnime">
                Tal cual como todos adoraban héroes en su niñez, cierto
                adolescente...
            </div>
            <div className="card_description__containerButtons">
                <button>Show more</button>
                <button>Add to list</button>
            </div>
        </div>
    );
};
export default CardDescription;
