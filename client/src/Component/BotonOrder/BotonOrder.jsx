import { useDispatch } from "react-redux";
import { setearOrder } from "../../Redux/Actions/action";

import style from "./BotonOrder.module.css";

const BotonOrder = ({ setRender, render }) => {
  const disptach = useDispatch();

  const handleChange = (e) => {
    setRender(!render);
    disptach(setearOrder(e.target.value));
  };

  return (
    <div className={style.contain}>
      <select onChange={handleChange} className={style.select}>
        <option value="" disable>
          Choose a Order..
        </option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
};

export default BotonOrder;
