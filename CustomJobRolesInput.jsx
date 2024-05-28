import React from 'react';
import { AddIcon } from '@sanity/icons';

const CustomJobRolesInput = React.forwardRef((props, ref) => {
  const { value = [], onChange } = props;

  const handleAddJobRole = () => {
    onChange([...value, { title: '', description: '' }]);
  };

  const handleTitleChange = (index, newTitle) => {
    const newValue = [...value];
    newValue[index].title = newTitle;
    onChange(newValue);
  };

  const handleDescriptionChange = (index, newDescription) => {
    const newValue = [...value];
    newValue[index].description = newDescription;
    onChange(newValue);
  };

  return (
    <div>
      {value.map((jobRole, index) => (
        <div key={index}>
          <input
            type="text"
            value={jobRole.title}
            onChange={(e) => handleTitleChange(index, e.target.value)}
            placeholder="Enter job role title"
          />
          <textarea
            value={jobRole.description}
            onChange={(e) => handleDescriptionChange(index, e.target.value)}
            placeholder="Enter description"
          />
        </div>
      ))}
      <button onClick={handleAddJobRole}>
        <AddIcon /> Add Job Role
      </button>
    </div>
  );
});

export default CustomJobRolesInput;
