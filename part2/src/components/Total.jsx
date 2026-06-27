import { useState } from 'react'

const Total = ({ parts }) => {
    return (
        <p>total of <b>{parts.reduce((sum, part) => sum + part.exercises, 0)} </b> exercises</p>
    )
}

export default Total