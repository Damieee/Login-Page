import React from 'react';
import {Button} from 'react-bootstrap';


function MyButton(prop) {
  return (
            <Button variant="primary" type="submit" className="w-100">
                {prop.name}
            </Button>
  );
}

export default MyButton;
