import React from "react";

export default function DeleteConform({
  dataOfItemSureComponent,
  setDataOfItemSure,
}) {
  return (
    <div className="absolute  flex flex-col items-center justify-center w-screen h-screen bg-[#00000050] ">
      <div className="absolute flex flex-col items-center justify-center px-10 py-5 bg-gray-500 rounded-md">
        <h1 className="text-4xl">Are you sure you want to delete this one</h1>
        <div className="mt-5 space-x-3 buttons">
          <button
            className="px-4 py-2 text-center text-white bg-pink-700 border-2 border-black rounded-md cursor-pointer w-sm hover:bg-pink-600 transitionOfTime"
            onClick={() => {
              console.log(dataOfItemSureComponent.textOfTask);
              setDataOfItemSure({
                ...dataOfItemSureComponent,
                sure: false,
                goToProcess: true,
              });
            }}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 text-center text-white bg-pink-700 border-2 border-black rounded-md cursor-pointer w-sm hover:bg-pink-600 transitionOfTime"
            onClick={() => {
              setDataOfItemSure({
                ...dataOfItemSureComponent,
                sure: false,
                goToProcess: false,
              });
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
