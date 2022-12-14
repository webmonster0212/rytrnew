import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

export default function Right() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
    height: 400
  };
  const handleUpdate = (event) => {
    const editorContent = event.target.innerHTML;
    setContent(editorContent);
  };

  return (
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {}}
      />
  );
}