import { useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }, ref) {
  useImperativeHandle(ref, () => {
    return {
      open() {},
    };
  });
  return createPortal(
    <dialog>{children}</dialog>,
    document.getElementById("modal-root")
  );
}
