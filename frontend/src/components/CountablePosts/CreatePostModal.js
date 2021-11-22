import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import CreatePostForm from "./CreatePostForm";
import { useSelector } from "react-redux";
// import { setCurrentModal } from "../../store/modal";
import "./CreatePostModal.css"

function CreatePostModal() {
  const [showPostModal, setShowPostModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    if (showPostModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showPostModal]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <i
        class="far fa-plus-square create-post-button"
        onClick={() => setShowPostModal(true)}
      ></i>
    );
  }

  return (
    <div className="create-event-container">
      <div>{sessionLinks}</div>
      {showPostModal && (
        <Modal onClose={() => setShowPostModal(false)}>
          <CreatePostForm setShowPostModal={setShowPostModal} />
        </Modal>
      )}
    </div>
  );
}

export default CreatePostModal;
