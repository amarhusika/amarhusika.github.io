import { Card, Row, Col } from 'react-bootstrap'
import { FaCode, FaServer, FaPaintBrush, FaDatabase, FaCloud, FaTools, FaUserCog, FaLanguage } from 'react-icons/fa'

const Skills = () => {
  return (
    <Card className="my-5" id="skills">
      <Card.Body>
        <Card.Title>Skills</Card.Title>

        <Row className="mt-4">
          <SkillGroup title="Programming" icon={<FaCode />} skills="C, C++, C#, Java, JavaScript, TypeScript, Python, PHP" />
          <SkillGroup title="Backend" icon={<FaServer />} skills="ASP.NET, Spring Boot, Node.js" />
          <SkillGroup title="Frontend" icon={<FaPaintBrush />} skills="React, Angular, Bootstrap" />
          <SkillGroup title="Design" icon={<FaPaintBrush />} skills="HTML, CSS, Photoshop, Figma, Camtasia Studio" />
          <SkillGroup title="Databases" icon={<FaDatabase />} skills="Oracle, MSSQL, MySQL, PostgreSQL, MongoDB" />
          <SkillGroup title="Cloud" icon={<FaCloud />} skills="AWS, Azure, Docker" />
          <SkillGroup title="Technical" icon={<FaTools />} skills="CLI, Linux, Git" />
          <SkillGroup title="IT & Personal" icon={<FaUserCog />} skills="System, Networks, Virtual Assistance, MS Office, Content Creation" />
          <SkillGroup title="Languages" icon={<FaLanguage />} skills="Arabic, Bosnian, English, German" />
        </Row>
      </Card.Body>
    </Card>
  )
}

const SkillGroup = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string }) => (
  <Col md={6} className="mb-4">
    <h5 className="text-primary">{icon} <span className="ms-2">{title}</span></h5>
    <p className="text-muted">{skills}</p>
  </Col>
)

export default Skills
