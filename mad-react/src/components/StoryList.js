import React, { useState, useEffect } from "react";
import Story from "./Story"

function StoryList() {
    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/stories')
        .then(resp => resp.json())
        .then(fetchStories => setStories(fetchStories))
    }, [])

    const renderStories = stories.map(story => {
        return <Story key={story.id} story={story}/>
    })

    return (
        <ul>
            {renderStories}
        </ul>
    )
}

export default StoryList