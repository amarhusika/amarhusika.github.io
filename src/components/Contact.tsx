import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState<boolean | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setSuccess(true)
        formRef.current?.reset()
      })
      .catch(() => setSuccess(false))
  }

  return (
    <Card className="my-5" id="contact">
      <Card.Body>
        <Card.Title>Contact</Card.Title>

        <Form ref={formRef} onSubmit={sendEmail} className="mt-4">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={4} placeholder="Type your message..." required />
          </Form.Group>
          <Button variant="primary" type="submit">Send</Button>
        </Form>

        {success === true && <Alert variant="success" className="mt-3">Message sent successfully!</Alert>}
        {success === false && <Alert variant="danger" className="mt-3">Failed to send message. Try again later.</Alert>}
      </Card.Body>
    </Card>
  )
}

export default Contact
