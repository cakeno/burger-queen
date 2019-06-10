import React from "react"
import { Form, Button } from 'react-bootstrap'

function LoginComponent(props) {
  return (
    <Form>
      <Form.Group controlId="formLoginEmail">
        <Form.Control
          name="emailLogin"
          value={props.data.emailLogin}
          type="email"
          placeholder="Digite seu email"
          onChange={props.handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formLoginPassword">
        <Form.Control
          name="passwordLogin"
          value={props.data.passwordLogin}
          type="password"
          placeholder="Digite sua senha"
          onChange={props.handleChange}
        />
      </Form.Group>
      <Button
      variant="primary"
      type="submit"
      className="mb-3"
      onClick={props.database}
      block>
      Entrar
      </Button>
    </Form>
  )
}
export default LoginComponent