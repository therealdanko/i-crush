import React from 'react'
import './CreateTaskForm.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateTaskForm = () => {
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  
  return (
    <div className="task-form">
      <h2>Create New Task</h2>
      <Form onClick={handleSubmit}>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task Title</Form.Label>
          <Form.Control type="email" placeholder="Enter task" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Task Description</Form.Label>
          <Form.Control type="text" as="textarea" placeholder="Description" />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Complete By</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select Category</option>
          <option value="1">Home</option>
          <option value="2">Work</option>
          <option value="3">School</option>
        </Form.Select>

        


        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </div>
  )
}

export default CreateTaskForm