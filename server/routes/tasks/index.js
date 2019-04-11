const express = require("express");
const router = express.Router();
router
  .route("/")
  .get((req, res) => {
    // console.log("hello");
    return new req.database.Task()
      .fetchAll()
      .then(data => {
        console.log("hello");
        return res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    return new req.database.Task(req.body)
      .save()
      .then(saved => {
        console.log(saved);
        res.redirect("/");
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });
router.route("/delete/:id").post((req, res) => {
  console.log("DELETE!");
  console.log("req params", req.params.id);
  return new req.database.Task()
    .where("id", req.params.id)
    .destroy()
    .then(card => {
      console.log("card has been deleted", card);
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
