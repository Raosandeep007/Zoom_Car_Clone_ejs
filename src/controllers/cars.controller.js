const express = require("express");

const router = express.Router();

const Car = require("../models/cars.model");

const redis = require("../configs/redis");

router.get("/product", async (req, res) => {
  try {
    redis.get("cars", async (err, cars) => {
      if (err) return res.status(500).send({ error: err.message });
      if (cars) {
        const allcars = JSON.parse(cars);
        return res.status(200).render("cars/product", { cars: allcars });
      } else {
        const cars = await Car.find().sort({ _id: -1 }).lean().exec();
        redis.set("cars", JSON.stringify(cars));
        return res.status(200).render("cars/product", { cars: cars });
      }
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get("/:id/checkout", async (req, res) => {
  try {
    redis.get(`car.${req.params.id}`, async function (err, car) {
      if (err) console.log(err.message);

      if (car) {
        const fetchedcar = JSON.parse(car);

        return res.render("cars/checkout", { car: fetchedcar });
      } else {
        try {
          const car = await Car.findById(req.params.id).lean().exec();
          redis.set(`car.${req.params.id}`, JSON.stringify(car));

          return res.render("cars/checkout", { car: car });
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id/faresummary", async (req, res) => {
  try {
    redis.get(`car.${req.params.id}`, async function (err, car) {
      if (err) console.log(err.message);

      if (car) {
        const fetchedcar = JSON.parse(car);

        return res.render("cars/faresummary", { car: fetchedcar });
      } else {
        try {
          const car = await Car.findById(req.params.id).lean().exec();
          redis.set(`car.${req.params.id}`, JSON.stringify(car));

          return res.render("cars/faresummary", { car: car });
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id/plan", async (req, res) => {
  try {
    redis.get(`car.${req.params.id}`, async function (err, car) {
      if (err) console.log(err.message);

      if (car) {
        const fetchedcar = JSON.parse(car);

        return res.render("cars/plan", { car: fetchedcar });
      } else {
        try {
          const car = await Car.findById(req.params.id).lean().exec();
          redis.set(`car.${req.params.id}`, JSON.stringify(car));

          return res.render("cars/plan", { car: car });
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id/coupon", async (req, res) => {
  try {
    redis.get(`car.${req.params.id}`, async function (err, car) {
      if (err) console.log(err.message);

      if (car) {
        const fetchedcar = JSON.parse(car);

        return res.render("cars/coupon", { car: fetchedcar });
      } else {
        try {
          const car = await Car.findById(req.params.id).lean().exec();
          redis.set(`car.${req.params.id}`, JSON.stringify(car));

          return res.render("cars/coupon", { car: car });
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id/payment", async (req, res) => {
  try {
    redis.get(`car.${req.params.id}`, async function (err, car) {
      if (err) console.log(err.message);

      if (car) {
        const fetchedcar = JSON.parse(car);

        return res.render("cars/payment", { car: fetchedcar });
      } else {
        try {
          const car = await Car.findById(req.params.id).lean().exec();
          redis.set(`car.${req.params.id}`, JSON.stringify(car));

          return res.render("cars/payment", { car: car });
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id/thanks", async (req, res) => {
  try {
    redis.get(`car.${req.params.id}`, async function (err, car) {
      if (err) console.log(err.message);

      if (car) {
        const fetchedcar = JSON.parse(car);

        return res.render("cars/thanks", { car: fetchedcar });
      } else {
        try {
          const car = await Car.findById(req.params.id).lean().exec();
          redis.set(`car.${req.params.id}`, JSON.stringify(car));

          return res.render("cars/thanks", { car: car });
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/zms", async (req, res) => {
  return res.render("cars/zms_e/zms");
});
module.exports = router;
