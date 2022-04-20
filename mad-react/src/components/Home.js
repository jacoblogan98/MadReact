import React from "react";
import StoryList from "./StoryList"

function Home({ stories }) {
    return (
        <>
            <h1>Home</h1>
            <StoryList stories={stories}/>
        </>
    )
}

export default Home