import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'

function MadForm() {
    const [story, setStory] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/stories/${params.id}`)
        .then(resp => resp.json())
        .then(story => {
            return setStory(story)
        })
    }, [params.id])

    if (!story) return <h2>Loading...</h2>

    console.log(story.blanks)

    const renderStoryForm = story.blanks.map(blank => {
        return (
            <input key={uuidv4()} type="text" placeholder={blank}></input>
        )
    })

    return (
        <form>
            <h2>{story.title}</h2>
            {renderStoryForm}
            <input type="submit" />
        </form>
    )
}

export default MadForm