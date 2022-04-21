import React from "react";
import { Link } from "react-router-dom"

function Saved({ savedStories }) {
    const renderSaved = savedStories.map(story => {
        return (
            <li>
                <Link to={`/savedstory/${story.id}`}>{story.title}</Link>
            </li>
        )
    })

    return (
        <>
            <h1>Saved Stories</h1>
            <ul>
                {renderSaved}
            </ul>
        </>
    )
}

export default Saved