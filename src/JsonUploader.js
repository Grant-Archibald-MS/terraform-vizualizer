// src/JsonUploader.js
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactJson from 'react-json-view';

const JsonUploader = () => {
  const [variables, setVariables] = useState(null);
  const [resources, setResources] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      const variables = data.values?.root_module?.variables || {};
      const resources = data.values?.root_module?.resources || [];
      setVariables(variables);
      setResources(resources);
    };
    reader.readAsText(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.json' });

  return (
    <div>
    <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Drag & drop a JSON file here, or click to select a file</p>
    </div>
    <div>
      {resources && (
        <div>
          <h2>Resources</h2>
          <ReactJson src={resources} />
        </div>
      )}
    </div>
    </div>
  );
};

export default JsonUploader;
