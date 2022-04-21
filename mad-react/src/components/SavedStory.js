import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function SavedStory() {
    const [story, setStory] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/saved-stories/${params.id}`)
        .then(resp => resp.json())
        .then(story => setStory(story))
    }, [params.id])

    return (
        <div className="story">
            <h1>{story.title}</h1>
            <h4>{story.story}</h4>
        </div>
    )
}

export default SavedStory