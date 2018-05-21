import React from 'react'

const ShowJson = ({data, indent}) => (
    <pre>
        <code>
            {JSON.stringify(data)}
        </code>
    </pre>
)

export { ShowJson }