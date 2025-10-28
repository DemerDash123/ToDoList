import { createContext } from "react";

import { v4 as uuidv4 } from "uuid";
console.log();
export let DataOfTask = createContext(
  JSON.parse(window.localStorage.getItem("itemOfItems")) == null
    ? [
        {
          id: uuidv4(),
          title: "first task",
          description: "Enter the description of the task",
          isDone: false,
          hideFilter: false,
        },
      ]
    : JSON.parse(window.localStorage.getItem("itemOfItems"))
);
