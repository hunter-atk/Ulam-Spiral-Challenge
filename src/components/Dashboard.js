import React from 'react'
import { Container, Col, Row } from 'react-grid-system' 
import { Image } from 'semantic-ui-react'
import { 
    MediaParagraph,
    CenteredParagraph,
    Paragraph,
    ImagePlaceholder,

} from './wireframes'

const Dashboard = ({ debug }) => (
    <Container>
        <h1>Wireframes</h1>
        <Row>
            <Col {...debug}>
                <CenteredParagraph />
            </Col>
            <Col {...debug}>
                <MediaParagraph />
            </Col>
            <Col {...debug}>
                <Paragraph />
            </Col>
            <Col {...debug}>
                <ImagePlaceholder />
            </Col>
        </Row>
    </Container>
)

export { Dashboard }