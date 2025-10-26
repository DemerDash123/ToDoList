import { createContext } from "react";

import { v4 as uuidv4 } from "uuid";
export let DataOfTask = createContext([
  {
    id: uuidv4(),
    title: "Read Book",
    description: "read one page of book",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "eat healthy food",
    description: "",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "go to gym",
    description: "chest and back",
    isDone: false,
  },
]);
