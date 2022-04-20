import React from "react";
import { Link } from "react-router-dom"

function Story({ story }) {
    return (
    <li>
        <Link to={`/form/${story.id}`}>{story.title}</Link>
    </li>
    )
}

export default Story