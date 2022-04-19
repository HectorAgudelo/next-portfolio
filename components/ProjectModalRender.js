import React from 'react';
import { Card } from 'react-bootstrap';

export const ProjectModalRender = (props) => {
  return (
    <>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant='top' src={props.img} />
        <Card.Body>
          <Card.Title>{props.tittle}</Card.Title>
          <Card.Text>
          {props.description}
          </Card.Text>
        
            {props.codeButton}
            {props.appButton}
        
        </Card.Body>
      </Card>
    </>
  );
};
