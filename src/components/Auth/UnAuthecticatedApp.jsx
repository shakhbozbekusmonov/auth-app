import React from "react";
import { Container, Row, Col, Card } from "./styled";
import useToken from "../../hooks/useToken";
import { baseUrl } from "../../utils/utils";

const UnAuthecticatedApp = () => {
    const [setAuth] = useToken(true);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const [email, password] = evt.target.elements;

        try {
            const res = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.value.trim(),
                    password: password.value.trim(),
                }),
            });
            const data = await res.json();

            if (data?.token) {
                setAuth(data?.token);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <form onSubmit={(evt) => handleSubmit(evt)}>
                                <input
                                    className='form-control mb-3'
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    autoComplete='current-email'
                                    defaultValue='eve.holt@reqres.in'
                                    required
                                />

                                <input
                                    className='form-control mb-3'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    autoComplete='current-password'
                                    defaultValue='cityslicka'
                                    required
                                />

                                <div className='d-grid'>
                                    <button
                                        className='btn btn-primary'
                                        type='submit'>
                                        Log In
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default UnAuthecticatedApp;
