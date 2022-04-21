import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


function SubmittedStory({ inputs, handleSave }) {
    const [story, setStory] = useState({})
    const [prompt, setPrompt] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/stories/${params.id}`)
        .then(resp => resp.json())
        .then(story => {
            setStory(story)
            return setPrompt(story.value)
        })
    }, [params.id])

    if (!story) return <h2>Loading...</h2>

    prompt.pop()

    const joinedArr=[]

    for (let i = 0; i <= inputs.length; i++) {
        joinedArr.push(prompt.slice(i))
        joinedArr.push(inputs.slice(i))
    } 

    const mappedArr = joinedArr.map(array => {
        return array[0]
    })

    const joinedStory = mappedArr.join('')

    function handleBtn() {
        fetch('http://localhost:3000/saved-stories', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: story.title,
                story: joinedStory
            })
        })
        .then(resp => resp.json())
        .then(savedStory => handleSave(savedStory))

        alert('Story Saved')
    }
    
    return (
        <div className="story">
            <h1>{story.title}</h1>
            <h4>{joinedStory}</h4>
            <button onClick={handleBtn}>Save Story</button>
        </div>
    )
}

export default SubmittedStory