import { useDispatch } from "react-redux";
import { setearBD_api } from "../../Redux/Actions/action";

import style from "./BotonBDApi.module.css";

const BotonBDApi = () => {
  const dispatch = useDispatch();

  const Juegos = ["Todos", "creados", "api"];

  const handleChange = (e) => {
    dispatch(setearBD_api(e.target.value));
  };

  return (
    <div className={style.contain}>
      <div>
        <select
          className={style.select}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option selected disabled>
            Choose a Game..
          </option>

          {Juegos.map((op, i) => {
            return (
              <option value={op} key={i}>
                {op}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default BotonBDApi;
