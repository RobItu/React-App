import { useState } from "react";

interface Props {
  children: string;
}

function Button({ children }: Props) {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleButtonHideAlert = () => {
    setShowAlert(false);
  };

  const alert = <div className="alert alert-primary">Alert</div>;

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          handleButtonClick();
        }}
      >
        {children}
      </button>
      {showAlert && (
        <div className="alert alert-primary">
          Alert
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleButtonHideAlert}
          ></button>
        </div>
      )}
    </>
  );
}

export default Button;
