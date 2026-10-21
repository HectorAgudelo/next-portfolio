import React from 'react';
import { Card } from 'react-bootstrap';

// Every card has the same image height and fills its grid cell; the grid
// (gridAutoRows: 1fr) makes every row as tall as the tallest card. Buttons stay pinned to the bottom of the card.
export const ProjectModalRender = (props) => {
  return (
    <Card style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '200px', background: '#f4f1ec', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Card.Img
          variant='top'
          src={props.img}
          alt={props.tittle}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Card.Title>{props.tittle}</Card.Title>
        <Card.Text style={{ flexGrow: 1 }}>{props.description}</Card.Text>
        {(props.codeButton || props.appButton) && (
          <div style={{ display: 'flex', gap: '8px' }}>
            {props.codeButton}
            {props.appButton}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
