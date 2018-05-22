import React from 'react'
import { Image } from 'semantic-ui-react'

const sourceUrl = 'https://react.semantic-ui.com'

const MediaParagraph = () => (
    <Image onMouseDown={() => false} src={`${sourceUrl}/assets/images/wireframe/media-paragraph.png`} />
)
const CenteredParagraph = (props) => (
    <Image onMouseDown={() => false} src={`${sourceUrl}/assets/images/wireframe/centered-paragraph.png`} />
)
const ImagePlaceholder = (props) => (
    <Image onMouseDown={() => false} src={`${sourceUrl}/assets/images/wireframe/image.png`} />
)
const Paragraph = (props) => (
    <Image onMouseDown={(e) => e.preventDefault()} src={`${sourceUrl}/assets/images/wireframe/paragraph.png`} />
)
export { 
    ImagePlaceholder,
    MediaParagraph,
    CenteredParagraph,
    Paragraph,
}
