import React from 'react';
import { Button } from 'reactstrap';

function MenubarItem(props) {
  return (
    <div>
        <Button color="primary" outline onClick={props.onClick}>
        {props.label}
        </Button>
    </div>
  );
}

export default MenubarItem;