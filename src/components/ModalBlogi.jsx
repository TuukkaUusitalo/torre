import ReactDOM from "react-dom";

const ModalBlogi = ({ isOpen, onClose, title, pdfUrl, eventTitle, p1, p2, p3 }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          maxWidth: "700px",
          width: "100%",
          maxHeight: "90vh",        // tärkeä: ei kasva yli ruudun
          overflowY: "auto",        // mahdollistaa pystyscrollin
          padding: "2rem",
          position: "relative",
          WebkitOverflowScrolling: "touch", // pehmeä scrollaus iOS:lla
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "1.5rem",
            color: "#555",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{eventTitle}</h3>

        <p style={{ marginBottom: "1rem", color: "#333" }}>
        {p1}
        </p>

        <p style={{ marginBottom: "1rem", color: "#333" }}>
        {p2}
        </p>

        <p style={{ marginBottom: "1rem", color: "#333" }}>
        {p3}
        </p>
        

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#75b0ff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Sulje
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalBlogi;
