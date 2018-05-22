import React from 'react'

const ShowJson = ({data, indent}) => (
    <pre>
        <code>
            {JSON.stringify(data, null, 2)}
        </code>
    </pre>
)

export { ShowJson }