import { Spinner } from "@heroui/react";
import React from "react";

const GlobalLoading = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <Spinner />
    </div>
  );
};

export default GlobalLoading;
