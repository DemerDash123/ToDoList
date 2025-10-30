import Tasks from "./components/Tasks";
import Submit from "./components/Submit";
import { DataOfTask } from "./context/DataOfTask";
import { useState, useEffect } from "react";
import { ToastContext } from "./context/ToastContext";
import SnackBar from "./components/SnackBar";
function App() {
  let [dataTask, setDataTask] = useState(DataOfTask._currentValue);
  let [snackBarCheck, setSnackBarCheck] = useState({
    check: false,
    infoTitle: "done",
  });
  let [checkActive, setCheckActive] = useState(
    window.localStorage.getItem("checkActive") == null
      ? [true, false, false]
      : JSON.parse(window.localStorage.getItem("checkActive"))
  );

  useEffect(() => {
    window.localStorage.setItem("itemOfItems", JSON.stringify(dataTask));
    window.localStorage.setItem("checkActive", JSON.stringify(checkActive));
  }, [dataTask, checkActive]);

  function allAchieved() {
    setCheckActive([true, false, false]);
    let all = dataTask.map((e) => {
      return { ...e, hideFilter: false };
    });
    setDataTask(all);
  }
  let toasthideShow = (infoCheck) => {
    setSnackBarCheck({ ...snackBarCheck, infoTitle: infoCheck, check: true });

    setTimeout(() => {
      setSnackBarCheck({
        ...snackBarCheck,
        infoTitle: infoCheck,
        check: false,
      });
    }, 600);
  };

  function fliterAchieved() {
    let achieved = dataTask.map((e) => {
      if (e.isDone == false) {
        return { ...e, hideFilter: true };
      } else {
        return { ...e, hideFilter: false };
      }
    });
    setCheckActive([false, true, false]);
    setDataTask(achieved);
  }
  function fliterNotAchieved() {
    let notAchieved = dataTask.map((e) => {
      if (e.isDone == false) {
        return { ...e, hideFilter: false };
      } else {
        return { ...e, hideFilter: true };
      }
    });
    setCheckActive([false, false, true]);

    setDataTask(notAchieved);
  }

  return (
    <>
      <DataOfTask.Provider value={{ dataTask, setDataTask }}>
        <ToastContext.Provider value={toasthideShow}>
          <div
            className={`relative flex flex-col items-center justify-center p-4 mx-auto bg-white rounded shadow md:w-[600px] lg:w-[550px]`}
          >
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
            <Tasks />
            <Submit />
          </div>
        </ToastContext.Provider>
      </DataOfTask.Provider>
      <SnackBar
        snackBarCheck={snackBarCheck}
        setSnackBarCheck={setSnackBarCheck}
      />
    </>
  );
}

export default App;
