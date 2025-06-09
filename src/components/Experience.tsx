import { Card, Row, Col } from 'react-bootstrap'
import { FaChalkboardTeacher, FaGlobe, FaPencilRuler } from 'react-icons/fa'

const Experience = () => {
  return (
    <Card className="my-5" id="experience">
      <Card.Body>
        <Card.Title>Experience</Card.Title>
        <Row className="mt-4">
          <ExperienceItem
            title="Teaching Assistant"
            organization="Faculty of Electrical Engineering, University of Sarajevo"
            date="Oct 2022 – June 2023"
            icon={<FaChalkboardTeacher />}
            description={[
              "Delivered programming courses and conducted lab exercises.",
              "Collaborated with faculty on curriculum and student support.",
              "Explained programming concepts and guided practical sessions."
            ]}
          />
          <ExperienceItem
            title="Web Developer"
            organization="Fiverr (Remote)"
            date="April 2020 – Present"
            icon={<FaGlobe />}
            description={[
              "Developed responsive web applications for various clients.",
              "Worked with freelance teams on full-stack projects.",
              "Improved functionality and UX based on client feedback."
            ]}
          />
          <ExperienceItem
            title="Graphic Designer"
            organization="Freelancer (Remote)"
            date="Jan 2017 – Present"
            icon={<FaPencilRuler />}
            description={[
              "Designed book covers, social media graphics and promotional material.",
              "Edited videos and animations using Photoshop, Figma, Camtasia, Vegas Pro.",
              "Combined copywriting with design for marketing content."
            ]}
          />
        </Row>
      </Card.Body>
    </Card>
  )
}

interface ExperienceProps {
  title: string
  organization: string
  date: string
  icon: React.ReactNode
  description: string[]
}

const ExperienceItem = ({ title, organization, date, icon, description }: ExperienceProps) => (
  <Col md={12} className="mb-4">
    <h5 className="text-primary">{icon} <span className="ms-2">{title}</span></h5>
    <p className="mb-1 fw-bold">{organization}</p>
    <p className="text-muted fst-italic">{date}</p>
    <ul>
      {description.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </Col>
)

export default Experience
