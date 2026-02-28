import { useState } from "react";
import ModalBlogi from "./ModalBlogi";

function Blogi({ image, date, title, info, location, duration, hasModal, pdfUrl, 
  eventTitle,
    p1,
    p2,
    p3
   }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="tour-card relative">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>

        {hasModal && (
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-10 mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "10px 15px", borderRadius: 12, borderWidth: 0.5, borderColor: "hsl(32, 90%, 65%)" }}
          >
            Avaa teksti
          </button>
        )}
      </div>

      {/* Tässä uusi Portal-modaali */}
      <ModalBlogi isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} eventTitle={eventTitle} p1={p1} p2={p2} p3={p3} pdfUrl={pdfUrl} />
    </article>
  );
}

export default Blogi;
