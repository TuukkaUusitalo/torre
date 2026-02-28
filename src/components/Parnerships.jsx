import React from "react";
import { partner } from "../data";
import Partners from "./Partners";

const Partnerships = () => {
  return (
    <div>
        <h3 className="section-title" style={{textTransform: 'uppercase', marginTop: '1rem'}}>Yhteistyössä<span> kanssani</span></h3>
        <Partners partners={partner} parentClass="partners-list" />
    </div>
  );
};

export default Partnerships;