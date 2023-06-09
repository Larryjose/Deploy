const { Router } = require("express");
const { Videogame, Genre } = require("../db"); //genre se usa en Xbase
const router = Router();
//const { Op } = require('sequelize');-->modo xbase
const {
  ApiDetail,
  DbDetail,
  TotalDetail,
} = require("../Controllers/videogameControl");

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let match = [];
    if (id.length < 6) {
      const detailapi = await ApiDetail(id);
      match = detailapi.find((el) => el.id === parseInt(id));
    } else {
      match = await Videogame.findByPk(id);
    }

    res.status(200).send(match);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Videogame.destroy({
      where: { id: id },
    });
    res.status(200).send("Juego eliminado con exito");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      released,
      rating,
      platforms,
      imageUrl,
      genres,
      createdInDb,
    } = req.body;

    await Videogame.update(
      {
        name,
        description,
        released,
        rating,
        platforms,
        imageUrl,
        genres,
        createdInDb,
      },
      { where: { id } }
    );

    res.status(200).send("se actualizo tu juego");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//
//
//
//
//
//-----------Modo Pasar Api por la base de datos--------------
//
//
//
//
//

// router.get("/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const GameId = await Videogame.findOne({
//             where: { id: { [Op.eq]: id } }

//             // atributes: {model:Genre}}
//         });
//         res.status(200).send(GameId);
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// });

module.exports = router;
