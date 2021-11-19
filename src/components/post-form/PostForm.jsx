import { useState } from "react";

import "./PostForm.css";

export default function PostForm({ isEdit, post, onSubmit }) {
  const [formData, setFormData] = useState({
    title: post.title || "",
    body: post.body || ""
  });

  const onChangeInput = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOnSubmitForm = event => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      body: ""
    });
  };

  const isButtonDisabled = formData.body === "" || formData.body === "";

  return (
    <div className="post-form">
      <form>
        <h3>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={onChangeInput}
            disabled={!isEdit}
          />
        </h3>
        <input
          type="text"
          id="body"
          name="body"
          value={formData.body}
          onChange={onChangeInput}
          disabled={!isEdit}
        />
        <button disabled={isButtonDisabled} onClick={handleOnSubmitForm}>
          Add
        </button>
      </form>
    </div>
  );
}
