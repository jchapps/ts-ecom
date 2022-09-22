import MuiModal from "@mui/material/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { XMarkIcon } from "@heroicons/react/20/solid";

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button onClick={handleClose}>
          <XMarkIcon className="h-6 w-6" />
        </button>
      </>
    </MuiModal>
  );
}

export default Modal;
