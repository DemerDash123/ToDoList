import Tasks from "./components/Tasks";
import Submit from "./components/Submit";
import { DataOfTask } from "./context/DataOfTask";
import { useState } from "react";
function App() {
  let [dataTask, setDataTask] = useState(DataOfTask._currentValue);
  let [checkActive, setCheckActive] = useState([true, false, false]);
  function allAchieved() {
    setCheckActive([true, false, false]);
    setDataTask(DataOfTask._currentValue);
  }
  function fliterAchieved() {
    let achieved = DataOfTask._currentValue.filter((e) => {
      return e.isDone == true;
    });
    setCheckActive([false, true, false]);

    setDataTask(achieved);
  }
  function fliterNotAchieved() {
    let notAchieved = DataOfTask._currentValue.filter((e) => {
      return e.isDone == false;
    });
    setCheckActive([false, false, true]);
    setDataTask(notAchieved);
  }

  return (
    <>
      <DataOfTask.Provider value={dataTask}>
        <div className="relative flex flex-col items-center justify-center p-4 mx-auto bg-white rounded shadow w-xl">
          <h1 className="text-4xl font-bold ">Tasks</h1>
          <ul className="flex items-center justify-center my-4 space-x-2">
            <li
              className={`px-4 py-2 text-center border-2 border-black rounded-md cursor-pointer w-fit hover:bg-gray-200 transitionOfTime ${
                checkActive[0] ? "activeClicked" : ""
              } `}
              onClick={allAchieved}
            >
              All
            </li>
            <li
              className={`px-4 py-2 text-center border-2 border-black rounded-md cursor-pointer w-fit hover:bg-gray-200 transitionOfTime ${
                checkActive[1] ? "activeClicked" : ""
              }`}
              onClick={fliterAchieved}
            >
              Achieved
            </li>
            <li
              className={`px-4 py-2 text-center border-2 border-black rounded-md cursor-pointer w-fit hover:bg-gray-200 transitionOfTime ${
                checkActive[2] ? "activeClicked" : ""
              }`}
              onClick={fliterNotAchieved}
            >
              Not Achieved
            </li>
          </ul>
          <Tasks dataTask={dataTask} setDataTask={setDataTask} />
          <Submit dataTask={dataTask} setDataTask={setDataTask} />
        </div>
      </DataOfTask.Provider>
    </>
  );
}

export default App;
