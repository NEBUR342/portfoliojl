import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBriefcase,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import jsonData from "./json/data.json";
import "../App.css";

const About = () => {
  const [data, setData] = useState({
    voluntariados: [],
    estudios: [],
    idiomas: [],
    aptitudes: [],
    detallesAdicionales: [],
    tecnologias: [], // Se usa en renderInformatica
    capacidades: [],
  });

  useEffect(() => {
    setData(jsonData);
  }, []);

  const renderListSection = (title, items, renderItem, animationClass = "fade-in") => (
    <div className="col-12 col-md-6 mx-auto">
      <CSSTransition timeout={500} classNames={animationClass}>
        <div className="card shadow-lg rounded-lg my-4">
          <div className="card-header bg-primary text-white text-center">
            <h3 className="mb-0">{title}</h3>
          </div>
          <div className="card-body p-4 rounded-1">
            <ul className="list-group list-group-flush">
              {(items || []).map(renderItem)}
            </ul>
          </div>
        </div>
      </CSSTransition>
    </div>
  );

  const renderAptitudes = () =>
    renderListSection("Aptitudes", data.aptitudes, (aptitud) => (
      <li key={aptitud.id} className="list-group-item my-1">
        <h4>{aptitud.name}</h4>
      </li>
    ));

  const renderDetallesAdicionales = () =>
    renderListSection("Detalles Adicionales", data.detallesAdicionales, (detalle) => (
      <li key={detalle.id} className="list-group-item my-1">
        <h4>{detalle.name}</h4>
      </li>
    ));

  const renderVoluntariados = () =>
    renderListSection("Voluntariados", data.voluntariados, (voluntariado) => (
      <li key={voluntariado.id} className="list-group-item my-1">
        <h4>
          <FontAwesomeIcon icon={faBuilding} className="me-2" />
          {voluntariado.nombreEmpresa}
        </h4>
        <h5>
          <FontAwesomeIcon icon={faBriefcase} className="me-2" />
          {voluntariado.nombrePuesto}
        </h5>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
          {voluntariado.lugar}
        </p>
        <p>
          {voluntariado.fechaInicio} - {voluntariado.fechaFin}
        </p>
        <p>{voluntariado.descripcion}</p>
      </li>
    ));

  const renderEstudios = () =>
    renderListSection("Estudios", data.estudios, (estudio) => (
      <li key={estudio.id} className="list-group-item my-1">
        <h4>
          <FontAwesomeIcon icon={faBuilding} className="me-2" />
          {estudio.centro}
        </h4>
        <h5>
          <FontAwesomeIcon icon={faBriefcase} className="me-2" />
          {estudio.nombreCurso}
        </h5>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
          {estudio.lugar}
        </p>
        <p>
          {estudio.fechaInicio} - {estudio.fechaFin}
        </p>
      </li>
    ));

  const renderIdiomas = () =>
    renderListSection("Idiomas", data.idiomas, (idioma) => (
      <li key={idioma.id} className="list-group-item my-1">
        <h4>
          {idioma.nombre}: {idioma.nivel}
        </h4>
      </li>
    ));

  const renderInformatica = () =>
    renderListSection("Tecnologías", data.tecnologias, (tecnologia) => (
      <li key={tecnologia.id} className="list-group-item my-1">
        <h4>{tecnologia.nombre}</h4>
      </li>
    ));

  const renderCapacidades = () =>
    renderListSection("Capacidades", data.capacidades, (capacidad) => (
      <li key={capacidad.id} className="list-group-item my-1">
        <h4>{capacidad.nombre}</h4>
        <p>{capacidad.descripcion}</p>
      </li>
    ));

  return (
    <TransitionGroup>
      <CSSTransition timeout={500} classNames="fade">
        <>
          <div className="row justify-content-between">
            {renderVoluntariados()}
          </div>
          <div className="row justify-content-between">
            {renderEstudios()}
            {renderIdiomas()}
          </div>
          <div className="row justify-content-between">
            {renderInformatica()}
            {renderCapacidades()}
          </div>
          <div className="row justify-content-between">
            {renderAptitudes()}
            {renderDetallesAdicionales()}
          </div>
        </>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default About;
