import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function closeAll(event) {
      if (event.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", closeAll);

    return () => window.removeEventListener("keydown", closeAll);
  }, [callback]);
}

export default useEscapeKey;
