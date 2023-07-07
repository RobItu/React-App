import { useState } from "react";
import Alert from "./Alert";

interface Props {
  children: string;
  onClick: () => void;
}

function Button({ onClick, children }: Props) {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <button type="button" className="btn btn-success" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
