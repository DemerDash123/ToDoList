import { useState } from "react";
import TaskConform from "../components/TaskConform";
import { v4 as uuidv4 } from "uuid";
export default function Submit({ dataTask, setDataTask }) {
  let [addTask, setAddTask] = useState({
    textOfTask: "",
    sure: false,
    goToProcess: false,
  });
  function handleClick() {
    setDataTask([
      ...dataTask,
      {
        id: uuidv4(),
        title: addTask.textOfTask,
        description: "",
        isDone: false,
      },
    ]);
    setAddTask({ textOfTask: "", sure: true, goToProcess: false });
  }
  return (
    <>
      <div className="flex items-center justify-between w-full mt-4 space-x-2 addTasks">
        <button
          className={`px-4 py-2 text-center text-white bg-pink-700 border-2 border-black rounded-md cursor-pointer w-fit hover:bg-pink-600 transitionOfTime ${
            addTask.textOfTask == "" ? "disabled" : ""
          }`}
          onClick={handleClick}
        >
          Submit
        </button>
        <input
          onChange={(e) => {
            setAddTask({ ...addTask, textOfTask: e.target.value });
          }}
          value={addTask.textOfTask}
          className="w-full px-4 py-2 border-2 rounded-md"
          type="text"
          placeholder="Enter your task"
        />
      </div>
      {addTask.sure ? (
        <TaskConform
          dataOfItemSureComponent={addTask}
          setDataOfItemSure={setAddTask}
        />
      ) : (
        ""
      )}
    </>
  );
}
