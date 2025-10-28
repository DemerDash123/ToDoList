import { useState } from "react";
import TaskConform from "../components/TaskConform";
import { v4 as uuidv4 } from "uuid";
import { DataOfTask } from "../context/DataOfTask";
import { useContext } from "react";
export default function Submit() {
  let dataOfthing = useContext(DataOfTask);
  let dataTask = dataOfthing.dataTask;
  let setDataTask = dataOfthing.setDataTask;
  let [addTask, setAddTask] = useState({
    textOfTask: "",
    sure: false,
    goToProcess: false,
    deleteInfo: false,
  });
  function handleClick() {
    setAddTask({
      id: uuidv4(),
      textOfTask: addTask.textOfTask,
      description: "",
      isDone: false,
      sure: true,
      goToProcess: false,
      deleteInfo: false,
    });
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
