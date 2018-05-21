import React from 'react'
import { Image } from 'semantic-ui-react'

const sourceUrl = 'https://react.semantic-ui.com'

const MediaParagraph = () => (
    <Image src={`${sourceUrl}/assets/images/wireframe/media-paragraph.png`} />
)
const CenteredParagraph = (props) => (
    <Image src={`${sourceUrl}/assets/images/wireframe/centered-paragraph.png`} />
)
const ImagePlaceholder = (props) => (
    <Image src={`${sourceUrl}/assets/images/wireframe/image.png`} />
)
const Paragraph = (props) => (
    <Image src={`${sourceUrl}/assets/images/wireframe/paragraph.png`} />
)
// const CenteredParagraph = (props) => (
//     <Image src={`${sourceUrl}/assets/images/wireframe/centered-paragraph.png`} />
// )
// const CenteredParagraph = (props) => (
//     <Image src={`${sourceUrl}/assets/images/wireframe/centered-paragraph.png`} />
// )
// const CenteredParagraph = (props) => (
//     <Image src={`${sourceUrl}/assets/images/wireframe/centered-paragraph.png`} />
// )
// const CenteredParagraph = (props) => (
//     <Image src={`${sourceUrl}/assets/images/wireframe/centered-paragraph.png`} />
// )
export { 
    ImagePlaceholder,
    MediaParagraph,
    CenteredParagraph,
    Paragraph,
}
