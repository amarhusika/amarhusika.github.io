import { Container, Button } from 'react-bootstrap'

const Hero = () => (
  <div className="bg-dark text-white text-center py-5">
    <Container>
      <h1 className="display-4">Amar Husika</h1>
      <p className="lead">Software Engineer</p>
      <Button variant="outline-light" href="#contact">Let's Talk</Button>
    </Container>
  </div>
)

export default Hero