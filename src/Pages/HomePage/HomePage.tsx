import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext"; /* 
const socket = new WebSocket("ws://localhost:3001");
socket.addEventListener("open", (event) => {
    console.log("conected to ws server");
});
socket.addEventListener("message", (event) => {
    console.log("message from server ", event.data);
}); */
export const HomePage = () => {
    const { toggleTheme } = useTheme();
    const apiUrl = "http://localhost:3001/api/notes";
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    return (
        <section className="cont">
            <h1>My List</h1>
            <p>
                This is a page of lists, where you can search and create list of
                things that call your attention.
            </p>
            <button onClick={toggleTheme}>switch theme</button>
            {data.map((date) => {
                const { id, content } = date;
                return (
                    <div key={id}>
                        <h1>{id}</h1>
                        <p>{content}</p>
                    </div>
                );
            })}
        </section>
    );
};
