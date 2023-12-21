import React, { useState, useEffect } from "react";

const CustomModal = ({ message, setMessage }: any) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
      setMessage();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [setMessage]);

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md`}
    >
      <p className="text-black text-lg font-bold mb-4">{message}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setOpen(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export { CustomModal };
