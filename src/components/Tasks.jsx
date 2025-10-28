import { useContext, useState } from "react";
import { DataOfTask } from "../context/DataOfTask";
import TaskConform from "./TaskConform";
import EditInformation from "./EditInformation";

export default function Tasks() {
  let dataOfthing = useContext(DataOfTask);
  let dataTask = dataOfthing.dataTask;
  let setDataTask = dataOfthing.setDataTask;

  let [dataOfItemSure, setDataOfItemSure] = useState({
    idNumber: 0,
    dataEditSure: false,
    sure: false,
    goToProcess: false,
    achieved: false,
    deleteInfo: true,
  });

  function deleteHandler(idOfTask) {
    setDataOfItemSure({
      ...dataOfItemSure,
      idNumber: idOfTask,
      sure: true,
      goToProcess: false,
      deleteInfo: true,
    });
  }
  function EditSpecificInformation(taskId) {
    setDataOfItemSure({
      ...dataOfItemSure,
      idNumber: taskId,
      dataEditSure: true,
      sure: true,
      goToProcess: false,
      deleteInfo: true,
    });
  }
  function handleTureChange(taskId) {
    let answer = dataTask.map((e) => {
      if (e.id == taskId) {
        return { ...e, isDone: !e.isDone };
      } else {
        return e;
      }
    });

    setDataTask(answer);
  }
  return (
    <>
      <div className="w-full tasks  h-[350px] overflow-y-auto flex justify-center items-center flex-col">
        {dataTask.map((taskData) => {
          return (
            <div
              key={taskData.id}
              className={`flex items-center justify-between w-full p-4 my-2 border-2 border-black rounded-md task bg-[#252f88] hover:py-6 hover:text-xl hover:shadow-2xl transitionOfTime  ${
                taskData.hideFilter ? "hidden" : ""
              } ${taskData.isDone ? "bg-[#252f88f0]" : "bg-[#252f88]"}`}
            >
              <div className="w-2/3 text">
                <h1
                  className={`text-2xl font-bold text-white ${
                    taskData.isDone ? "line-through" : ""
                  } `}
                >
                  {taskData.title}
                </h1>
                <p
                  className={`text-white ${
                    taskData.isDone ? "line-through" : ""
                  }`}
                >
                  {taskData.description}
                </p>
              </div>
              <div className="flex items-center justify-around text-2xl text-white icons min-w-2/6">
                <i
                  onClick={() => handleTureChange(taskData.id)}
                  className={` cursor-pointer fa-solid fa-check rounded-full ${
                    taskData.isDone ? "text-green-500  " : "text-white "
                  } transitionOfTime`}
                ></i>
                <i
                  onClick={() => EditSpecificInformation(taskData.id)}
                  className={
                    "text-blue-500 cursor-pointer fa-regular fa-pen-to-square"
                  }
                ></i>
                <i
                  onClick={() => deleteHandler(taskData.id)}
                  data-id={taskData.id}
                  className="text-red-500 cursor-pointer fa-regular fa-trash-can"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      {dataOfItemSure.sure == true ? (
        <TaskConform
          dataOfItemSureComponent={dataOfItemSure}
          setDataOfItemSure={setDataOfItemSure}
        />
      ) : (
        ""
      )}
      {dataOfItemSure.dataEditSure == true ? (
        <EditInformation
          dataOfItemSureComponent={dataOfItemSure}
          setDataOfItemSure={setDataOfItemSure}
        />
      ) : (
        ""
      )}
    </>
  );
}
