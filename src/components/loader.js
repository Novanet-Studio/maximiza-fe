import React from "react"

export default function Loader({ text = "Cargando..." }) {
  return (
    <div className="steps-form-loader">
      <div className="loader"></div>
      <p className="loader-text">{text}</p>
    </div>
  )
}