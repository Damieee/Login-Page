import React  from 'react';
import { Button } from 'react-bootstrap';



function onClickEvent(event, onSubmit) {

  alert('User Logged in');
}


function MyButton({ onSubmit }) {
  return (
    <Button 
    variant="primary" 
    type="submit" 
    className="w-100" 
    onClick={(event) => onClickEvent(event, onSubmit)}
  
    >
      Login
    </Button>
  );
}

export default MyButton;
