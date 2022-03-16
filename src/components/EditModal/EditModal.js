import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  let [item, setItem] = useState(props.editTodo);

  function handleEdit(e) {
    let newObj = { ...item };
    newObj.task = e.target.value;
    setItem(newObj);
  }

  function handleSave() {
    props.handleSaveTask(item);
  }

  // function handleSave(newTask) {

  // }
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal}>&times;</button>
        </div>
        <input
          onChange={handleEdit}
          type="text"
          value={item.task}
          className="inp-edit"
        />
        <button onClick={handleSave}>save</button>
      </div>
    </div>
  );
};

export default EditModal;
