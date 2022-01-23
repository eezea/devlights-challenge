import React from "react";
import { ExclamationIcon } from "@heroicons/react/outline";

function ErrorMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-stone-200">
      <ExclamationIcon className=" w-16 h-16" />
      <p className="text-2xl">
        Oops! Something went wrong. Try to refresh this page.
      </p>
    </div>
  );
}

export default ErrorMessage;
