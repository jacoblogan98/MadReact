import React from "react";
import Story from "./Story"

function StoryList({ stories }) {
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