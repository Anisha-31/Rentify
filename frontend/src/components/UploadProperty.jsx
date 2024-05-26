import React, { useState } from 'react';

function UploadProperty({ onUpload }) {
  const [newProperty, setNewProperty] = useState({ title: '', description: '', price: '' });

  const handleInputChange = (e) => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  const handleUploadProperty = () => {
    onUpload(newProperty);
    setNewProperty({ title: '', description: '', price: '' });
  };

  return (
    <div>
      <h2>Upload Property</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newProperty.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newProperty.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={newProperty.price}
        onChange={handleInputChange}
      />
      <button onClick={handleUploadProperty}>Upload</button>
    </div>
  );
}

export default UploadProperty;