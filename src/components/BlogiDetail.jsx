import { blogi } from "../data";
import Title from "./Title";
import Blogi from "./Blogi";

const Communities = () => {
  return (
    <section className="section" id="blogidetail">
      <Title title="tarinoita" subTitle="matkani varrelta" />

      <div className="section-center featured-center">
        {blogi.map((blogi) => {
          return <Blogi key={blogi.id} {...blogi} />;
        })}
      </div>
    </section>
  );
};
export default Communities;
