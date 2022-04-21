import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


function SubmittedStory({ inputs }) {
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
    
    return (
        <div className="finished-story">
            <h1>{story.title}</h1>
            <h4>{joinedStory}</h4>

        </div>
    )
}

export default SubmittedStory