import { configureStore } from "@reduxjs/toolkit";

// import reducer from "./bugs";
import reducer from "./projects";

export default function () {
  return configureStore({ reducer });
}
