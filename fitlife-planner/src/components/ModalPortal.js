// src/components/ModalPortal.js
import { createPortal } from "react-dom";

function ModalPortal({ children }) {
  const el = document.getElementById("modal-root");
  if (!el) return null; // safety check
  return createPortal(children, el);
}
export default ModalPortal;