import { ReactNode } from "react";
import handleButtonHideAlert from "./Button";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ onClose, children }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
