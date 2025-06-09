import { Card, Row, Col, Image, Button } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'

const About = () => (
  <Card className="my-5" id="about">
    <Card.Body>
      <Card.Title>About Me</Card.Title>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-3">
          <Image
            src="https://uploadamarhusika.netlify.app/profile.jpg"
            alt="Amar Husika"
            roundedCircle
            fluid
            style={{ maxWidth: '200px' }}
          />
        </Col>
        <Col md={8}>
          <Card.Text>
            I'm an aspiring software engineer with experience in web development and academic instruction. Skilled in a variety of programming languages and tools, with a focus on creating efficient and innovative solutions. Passionate about leveraging technology to solve real-world problems and eager to contribute to dynamic development teams.
          </Card.Text>

          {/* Dugme za Download CV */}
          <a
            href="https://uploadamarhusika.netlify.app/amarhusikacv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button variant="outline-primary" className="mt-2">
              <FaDownload className="me-2" />
              Download CV
            </Button>
          </a>
        </Col>
      </Row>
    </Card.Body>
  </Card>
)

export default About
