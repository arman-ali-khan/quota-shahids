import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'
 
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
})


function ReactQuillEditor() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" placeholder={'শহীদ এর বিস্তারিত তথ্য'} style={{color:'black',fontSize:'26px'}} value={value} onChange={setValue} />;
}

export default ReactQuillEditor