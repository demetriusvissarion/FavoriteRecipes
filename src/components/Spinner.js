import React from "react";

import spinnerIconUrl from "../img/spinner.png";

export default function Spinner() {
  return (
    <img src={spinnerIconUrl} alt="Recipes are loading" className="spinner" />
  );
}
