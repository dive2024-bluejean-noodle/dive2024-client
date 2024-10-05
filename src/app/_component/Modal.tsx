"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({
  isOpen,
  children,
  onClose,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen && typeof onClose === "function")
      document.addEventListener("keydown", handleEsc);
    return () => {
      if (typeof onClose === "function")
        document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="z-10">{children}</div>
    </div>,
    document.getElementById("modal-root")!,
  );
}
