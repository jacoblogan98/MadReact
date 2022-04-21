import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'

function MadForm({ handleInputs }) {
    const [story, setStory] = useState(null)
    
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:3000/stories/${params.id}`)
        .then(resp => resp.json())
        .then(story => {
            return setStory(story)
        })
    }, [params.id])

    if (!story) return <h2>Loading...</h2>

    const renderStoryForm = story.blanks.map(blank => {
        return (
            <input 
                key={uuidv4()} 
                type="text" 
                placeholder={blank}
            />
        )
    })

    let inputArr = []

    function handleSubmit(e) {
        e.preventDefault()

        for (const input of e.target) {
            inputArr.push(input.value)
        }
        inputArr.pop()

        handleInputs(inputArr)

        history.push(`/submittedstory/${story.id}`)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{story.title}</h1>
            {renderStoryForm}
            <input className="btn" type="submit" />
        </form>
    )
}

export default MadForm