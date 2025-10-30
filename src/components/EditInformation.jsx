import { useContext, useState } from "react";
import { DataOfTask } from "../context/DataOfTask";
import { ToastContext } from "../context/ToastContext";

export default function EditInformation({
  dataOfItemSureComponent,
  setDataOfItemSure,
}) {
  let dataOfthing = useContext(DataOfTask);
  let dataTask = dataOfthing.dataTask;
  let setDataTask = dataOfthing.setDataTask;
  let theData = dataTask.find((e) => e.id == dataOfItemSureComponent.idNumber);
  let [editInformations, setEditInformations] = useState({
    id: theData.id,
    title: theData.title,
    description: theData.description,
    isDone: theData.isDone,
    hideFilter: theData.hideFilter,
  });
  let toastActive = useContext(ToastContext);
  function handleSave() {
    let changeTheInformation = dataTask.map((e) => {
      if (e.id == dataOfItemSureComponent.idNumber) {
        return {
          id: editInformations.id,
          title: editInformations.title,
          description: editInformations.description,
          isDone: editInformations.isDone,
          hideFilter: editInformations.hideFilter,
        };
      } else {
        return e;
      }
    });
    toastActive("finish Edit Information");
    setDataTask(changeTheInformation);
    setDataOfItemSure({
      ...dataOfItemSureComponent,
      dataEditSure: false,
      sure: false,
      goToProcess: false,
    });
  }
  return (
    <div className="absolute  flex flex-col items-center justify-center w-screen h-screen bg-[#00000050] ">
      <div className="absolute flex flex-col items-center justify-center px-10 py-5 bg-gray-200 rounded-md ">
        <h1 className="my-4 text-3xl font-bold">Edit Information</h1>
        <input
          value={editInformations.title}
          onChange={(e) => {
            setEditInformations({ ...editInformations, title: e.target.value });
          }}
          className="w-full px-2 py-3 my-1 text-black border-2 border-black rounded-md placeholder:text-gray-500 focus:outline-none"
          type="text"
          placeholder="Edit the title"
        />
        <input
          value={editInformations.description}
          onChange={(e) => {
            setEditInformations({
              ...editInformations,
              description: e.target.value,
            });
          }}
          className="w-full px-2 py-3 my-1 text-black border-2 border-black rounded-md placeholder:text-gray-500 focus:outline-none"
          type="text"
          placeholder="Edit the description"
        />
        <div className="flex items-center justify-between mt-5 space-x-3 buttons max-w-[300px]">
          <button
            onClick={handleSave}
            className="px-4 py-2 text-center text-white bg-pink-700 border-2 border-black rounded-md cursor-pointer w-sm hover:bg-pink-600 transitionOfTime"
          >
            save
          </button>
          <button
            onClick={() => {
              setDataOfItemSure({
                ...dataOfItemSureComponent,
                dataEditSure: false,
                sure: false,
                goToProcess: false,
              });
            }}
            className="px-4 py-2 text-center text-white bg-pink-700 border-2 border-black rounded-md cursor-pointer w-sm hover:bg-pink-600 transitionOfTime"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
