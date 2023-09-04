import ReactModal from "react-modal";

interface ConfirmModalProps {
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  onConfirm,
  onClose,
}) => {
  return (
    <ReactModal
      isOpen={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          backgroundColor: "white",
          width: "50%",
          maxWidth: "400px",
          height: "150px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
    >
      <p>Are you sure?</p>
      <p>This will unmark steps made in next stages</p>
      <div className={"flex justify-between"}>
        <button
          className={"rounded-xl bg-purple-700 px-4 py-2 text-white"}
          onClick={onConfirm}
        >
          Accept
        </button>
        <button
          className={"rounded-xl bg-purple-400 px-4 py-2 text-white"}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </ReactModal>
  );
};
