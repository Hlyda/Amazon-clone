import React from 'react';

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}{/* Children is a special type of props that shows the content of messageBox in the place that it has been used */}
    </div>
  );
}