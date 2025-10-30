import React from "react";

export default function SnackBar({ snackBarCheck }) {
  return (
    <>
      <div
        className={`absolute bottom-0 m-1 left-0 max-w-md  opacity-0 px-2 py-4 text-xl bg-green-500 transitionOfTime rounded-md ${
          snackBarCheck.check ? "opacity-100" : "opacity-0"
        } `}
      >
        <h1 className="text-white">{snackBarCheck.infoTitle}</h1>
      </div>
    </>
  );
}
