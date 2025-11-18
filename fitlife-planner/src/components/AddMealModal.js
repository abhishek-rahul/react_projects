// src/components/AddMealModal.js
import { useState } from "react";
import ModalPortal from "./ModalPortal";

export default function AddMealModal({ onClose, onAddMeal }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !calories) return;

    onAddMeal({
      id: Date.now(),
      name: name.trim(),
      calories: Number(calories),
    });

    onClose();
  };

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation(); // prevent closing when clicking inside modal
  };

  return (
    <ModalPortal>
      {/* Backdrop */}
      <div
        onClick={handleBackdropClick}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        {/* Modal box */}
        <div
          onClick={stopPropagation}
          style={{
            background: "#fff",
            padding: "16px",
            borderRadius: "8px",
            minWidth: "320px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Add Meal (advanced)</h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "8px" }}>
              <label>
                Name:{" "}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter meal name"
                />
              </label>
            </div>

            <div style={{ marginBottom: "12px" }}>
              <label>
                Calories:{" "}
                <input
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="Enter calories"
                />
              </label>
            </div>

            <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
              <button type="button" onClick={onClose}>
                Close
              </button>
              <button type="submit">Add Meal</button>
            </div>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
}
