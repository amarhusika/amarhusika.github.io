import { Card, Row, Col, Badge } from 'react-bootstrap'
import { FaPoll, FaStore, FaBlogger, FaStethoscope, FaHandsHelping } from 'react-icons/fa'

const Projects = () => {
  return (
    <Card className="my-5" id="projects">
      <Card.Body>
        <Card.Title>Projects</Card.Title>
        <Row className="mt-4">
          <ProjectItem
            title="PollingApp"
            icon={<FaPoll />}
            techs={['Java', 'Spring Boot', 'MySQL', 'React']}
            description="A social polling app where users can post, vote and comment on polls, similar to Twitter threads."
          />
          <ProjectItem
            title="E-Commerce Store"
            icon={<FaStore />}
            techs={['C#', '.NET', 'React', 'Redux', 'Entity Framework']}
            description="A fully functional online clothing store with shopping cart, admin panel and payment integration."
          />
          <ProjectItem
            title="Blog"
            icon={<FaBlogger />}
            techs={['PHP', 'MySQL', 'Bootstrap']}
            description="Custom blogging platform with admin panel, post & user management, responsive design."
          />
          <ProjectItem
            title="VirtualDoctor"
            icon={<FaStethoscope />}
            techs={['Node.js', 'Express', 'MongoDB', 'JavaScript']}
            description="A Covid-era solution allowing patients to schedule online consultations and appointments with doctors. Hackathon-winning app."
          />
          <ProjectItem
            title="Charity Foundation"
            icon={<FaHandsHelping />}
            techs={['ASP.NET Core', 'Entity Framework', 'Razor Pages', 'Bootstrap 5', 'SQL Server']}
            description="A web platform for managing donations, help requests, volunteers, and reports — built for streamlined coordination between donors and recipients."
            link="https://github.com/ooad-2024-2025/Grupa3-Tim4"
          />
        </Row>
      </Card.Body>
    </Card>
  )
}

interface ProjectProps {
  title: string
  icon: React.ReactNode
  techs: string[]
  description: string
  link?: string
}

const ProjectItem = ({ title, icon, techs, description, link }: ProjectProps) => (
  <Col md={6} className="mb-4">
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="text-primary">
          {icon} <span className="ms-2">{title}</span>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mb-2">
          {techs.map((tech, idx) => (
            <Badge key={idx} bg="secondary" className="me-1">{tech}</Badge>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary mt-2">
            View on GitHub
          </a>
        )}
      </Card.Body>
    </Card>
  </Col>
)

export default Projects
