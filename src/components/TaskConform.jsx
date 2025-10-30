import React from "react";
import { DataOfTask } from "../context/DataOfTask";
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

export default function TaskConform({
  dataOfItemSureComponent,
  setDataOfItemSure,
}) {
  let dataOfthing = useContext(DataOfTask);
  let dataTask = dataOfthing.dataTask;
  let setDataTask = dataOfthing.setDataTask;
  let toastActive = useContext(ToastContext);
  function handleYes() {
    if (dataOfItemSureComponent.deleteInfo == true) {
      setDataOfItemSure({
        ...dataOfItemSureComponent,
        sure: false,
        goToProcess: true,
      });
      let DeleteConformation = dataTask.filter((e) => {
        return e.id != dataOfItemSureComponent.idNumber;
      });
      toastActive("Delete Successfully");
      setDataTask(DeleteConformation);
    } else {
      toastActive("submit successfully");
      setDataTask([
        ...dataTask,
        {
          id: dataOfItemSureComponent.id,
          title: dataOfItemSureComponent.textOfTask,
          description: "",
          isDone: false,
        },
      ]);
      setDataOfItemSure({
        ...dataOfItemSureComponent,
        textOfTask: "",
        sure: false,
        goToProcess: true,
      });
    }
  }
  function handleNo() {
    setDataOfItemSure({
      ...dataOfItemSureComponent,
      sure: false,
      goToProcess: false,
    });
  }
  return (
    <div className="absolute  flex flex-col items-center justify-center w-screen h-screen bg-[#00000050] ">
      <div className="absolute flex flex-col items-center justify-center px-10 py-5 bg-gray-500 rounded-md">
        <h1 className="text-4xl">Are you sure you want to delete this one</h1>
        <div className="mt-5 space-x-3 buttons flex justify-between items-center max-w-[300px] w-full">
          <button
            className="w-full px-4 py-2 text-center text-white bg-pink-700 border-2 border-black rounded-md cursor-pointer hover:bg-pink-600 transitionOfTime"
            onClick={handleYes}
          >
            Yes
          </button>
          <button
            className="w-full px-4 py-2 text-center text-white bg-pink-700 border-2 border-black rounded-md cursor-pointer hover:bg-pink-600 transitionOfTime"
            onClick={handleNo}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
