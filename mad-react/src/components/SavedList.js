import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function SavedList() {
    const [savedStories, setSavedStories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/saved-stories')
        .then(resp => resp.json())
        .then(savedStories => setSavedStories(savedStories))
    }, [])

    function handleDelete(story) {
        fetch(`http://localhost:3000/saved-stories/${story.id}`,{
            method: "DELETE",
            header: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(setSavedStories(savedStories.filter(savedStory => {
            return savedStory.id !== story.id
        })))
    }
    
    const renderSaved = savedStories.map(story => {
        return (
            <li key={story.id}>
                <Link to={`/savedstory/${story.id}`}>{story.title}</Link>
                <button 
                className="delete-btn" 
                onClick={() => handleDelete(story)}>X</button>
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

export default SavedList