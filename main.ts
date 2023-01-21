import express from "npm:express@4.18.2";
import { Request, Response } from "npm:express@4.18.2";

const app: express = express();

app.get("/", (_req: Response, res: Request): void => {
  res.send("Welcome to the Dinosaur API!");
});

app.get("/dinos", (_req: Response, res: Request): void => {
  res.status(200).json({
    "dinos": [
      {
        "name": "Tyrannosaurus Rex",
        "type": "Carnivore",
        "diet": "Carnivore",
        "period": "Late Cretaceous",
        "length": "40 feet",
        "weight": "7 tons",
      },
      {
        "name": "Stegosaurus",
        "type": "Herbivore",
        "diet": "Herbivore",
        "period": "Late Jurassic",
        "length": "30 feet",
        "weight": "5 tons",
      },
      {
        "name": "Triceratops",
        "type": "Herbivore",
        "diet": "Herbivore",
        "period": "Late Cretaceous",
        "length": "25 feet",
        "weight": "6 tons",
      },
    ],
  });
});

app.listen(8000);

console.log("Listening on port 8000");
