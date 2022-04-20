import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'

function MadForm() {
    const [story, setStory] = useState(null)
    // const [formData, setFormData] = useState({})
    // const [key, setKey] = useState(0)
    const [inputs, setInputs] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/stories/${params.id}`)
        .then(resp => resp.json())
        .then(story => {
            // for ( let i = 0; i <= story.blanks.length; i++ ) {
            //     setFormData((formData) => {
            //         return {
            //             ...formData, 
            //             [i]: ""
            //         }
            //     })
            // }

            return setStory(story)
        })
    }, [params.id])

    if (!story) return <h2>Loading...</h2>

    // function handleChange(e, key) {
    //     console.log(key)
    //     console.log(e)
    //     console.log(formData)
    //     setFormData({...formData, [key]: e.target.value})
    // }

    const renderStoryForm = story.blanks.map(blank => {
        let key = story.blanks.indexOf(blank)

        return (
            <input 
                key={uuidv4()} 
                type="text" 
                placeholder={blank}
                // value={formData[key]}
                // onChange={(e) => handleChange(e, key)}
            />
        )
    })

    let inputArr = []

    function handleSubmit(e) {
        e.preventDefault()

        console.log(e.target.value)

        inputArr.push(e.target.value)
        

        console.log(inputArr)
        
        // console.log(formData)
        e.target.reset()
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <h2>{story.title}</h2>
            {renderStoryForm}
            <input type="submit" />
        </form>
    )
}

export default MadForm