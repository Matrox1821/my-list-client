import React from "react";
import CardDescription from "../../components/Card-Description/CardDescription";
import Card from "../../components/Card/Card";
import image1 from "../../assets/images/eminencia1.png";
import image2 from "../../assets/images/eminencia2.png";
type Props = {};
export const AnimesPage = (props: Props) => {
    return (
        <section>
            <span className="line"></span>
            <div>
                AnimesPage
                <Card
                    title="Eminencia de las sombras"
                    src={image1}
                    reverse={true}
                    description={false}
                ></Card>
                <Card
                    title="Eminencia de las sombras"
                    src={image1}
                    reverse={false}
                    description={false}
                ></Card>
                <CardDescription
                    title="Eminencia de las sombras"
                    src={image2}
                ></CardDescription>
            </div>
        </section>
    );
};
