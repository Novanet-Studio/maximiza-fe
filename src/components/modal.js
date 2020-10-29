import React from "react"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

const Modal = ({ data, id, onClose, imageFieldName }) =>
  data.map(
    (item) =>
      item.id === id && (
        <div className="modal" key={item.id}>
          <div className="modal__content">
            <button onClick={onClose}>&times;</button>
            <div className="modal__body">
              {imageFieldName === undefined || (
                <Img
                  fluid={item[imageFieldName].childImageSharp.fluid}
                  title={item.titulo}
                  alt={""}
                />
              )}
              <h2 className="modal__title">{item.titulo}</h2>
              <ReactMarkdown
                className="inversionista__descripcion"
                source={item.contenido}
                escapeHtml={false}
              />
            </div>
          </div>
        </div>
      )
  )

export default Modal
