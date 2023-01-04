import React from 'react'
import { Form, Button, Row, Col, } from 'react-bootstrap';

const register = () => {
    return (
    <div className="w-25 mx-auto">
        <Row>
            <Col className="bg-success p-4 rounded mt-5">
                <h3 className='text-light mb-3'>Register</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="info" type="submit" className='w-50'>Submit</Button>
                </Form>
            </Col>
        </Row>
    </div>
    )
}

export default register