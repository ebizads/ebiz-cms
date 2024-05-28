// SaveButton.js
import React from 'react';

export const SaveButton = ({ onClick }) => (
  <button onClick={onClick}>Save</button>
);

export const CustomJobRolesInput = ({ type, value, onChange }) => {
  // Implement your input fields here
  return (
    <div>
      {/* Input fields for job roles */}
      <input type="text" value={value.title} onChange={(e) => onChange({ ...value, title: e.target.value })} />
      <textarea value={value.description} onChange={(e) => onChange({ ...value, description: e.target.value })}></textarea>
      {/* Save button */}
      <SaveButton onClick={() => console.log('Save clicked')} />
    </div>
  );
};
