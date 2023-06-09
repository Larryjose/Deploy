import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BorrarCacheDetail,
  delete_game,
  get_detail,
  get_videogames,
} from "../../Redux/Actions/action";
import style from "./DetailGame.module.css";
import { Link, useHistory, useParams } from "react-router-dom";


const DetailGame = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(get_detail(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);
  const history = useHistory();

  const handleDelete = () => {
    dispatch(delete_game(id));
    alert("videogame delete");
    history.push("/home");
    window.location.reload();
  };

  const handleClick = () => {
    dispatch(BorrarCacheDetail());
    dispatch(get_videogames());
  };

  return (
    <>
      <div className={style.contain}>
        <img src={detail.imageUrl} alt="portada" className={style.portada} />

        <div>
          <h1>{detail.name}</h1>
          <h3>Released: {detail.releaseDate}</h3>
          <h3>Rating: {detail.rating}★</h3>
          <h3>Genres: {detail.genres}</h3>
          <h3>Platforms: {detail.platforms}</h3>
          <h3>Description:</h3>
          <span>{detail.description}</span>

          {
            <Link to="/home/">
              <button className={style.button} onClick={handleClick}>
                HOME
              </button>
            </Link>
          }

          {id.length > 6 ? (
            <button type="button" onClick={handleDelete}>
              DELETE
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default DetailGame;
