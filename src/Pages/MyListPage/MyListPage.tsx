import React from "react";
import CardUser from "../../components/Card-User/CardUser";
import user from "../../assets/images/user.jpg";
type Props = {};

export const MyListPage = (props: Props) => {
    return (
        <section>
            <CardUser
                src={user}
                username="Matrox1821"
                description="Me gusta black clover, programar y el basquet."
            />
        </section>
    );
};
