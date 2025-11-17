// src/features/summary/SummaryContext.js
import { createContext, useContext } from "react";

export const SummaryContext = createContext(null);

export const useSummary = () => useContext(SummaryContext);
