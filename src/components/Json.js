import React from 'react'

const Json = ({ data, indent }) => <pre><code>{JSON.stringify(data, null, indent || 2)}</code></pre>

export { Json }