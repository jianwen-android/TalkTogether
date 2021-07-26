import React, { useRef } from 'react';
import { Form, Button, Card} from 'react-bootstrap';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    
    return (
        <Container 
    className="d-flex align-items-center justify-content-center" 
    style={{ minHeight: "100vh"}}>
            <div className="w-100" style={{ maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref = {emailRef} placeholder="Email address" required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref = {passwordRef} placeholder="Password"required />
                            </Form.Group>
                            <Form.Group id = "password-confirm" className="mb-3">
                                <Form.Label>Confirmation Password</Form.Label>
                                <Form.Control type="password" ref = {passwordConfirmRef} placeholder="Re-enter password"/>
                            </Form.Group>
                            <Button className="w-100" type="submit">
                                Sign up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                Already have an account? Log in
                </div>
            </div>
        </Container>
    )
}