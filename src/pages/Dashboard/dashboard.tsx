import React, { useContext } from "react";
import { FormTecnologia } from "../../components/FormTec/formTecnologia";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "react-modal";

import {
  DivCabecalhoTec,
  DivContainerDashboard,
  Header,
  Mainn,
  SectionDashboard,
} from "./styledDeshboard";
import { DadosUsuarioContext } from "../../providers/DadosDoUsuario";
import { AiFillDelete } from "react-icons/ai";

export default function DashboardPage() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      height: "90%",
      right: "auto",
      margin: "0",
      transform: "translate(-50%, -50%)",
      overflow: "hidden",
      padding: "0",
      background: "none",
      border: "none",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
    },
  };

  function sair() {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  }

  const {
    deletartech,
    fecharModal,
    abrirModal,
    modalEstaAberto,
    navigate,
    usuario,
  } = useContext(DadosUsuarioContext);

  return (
    <DivContainerDashboard>
      <Header>
        <img src="assets/Logo.png" alt="Imagem logo" />
        <button onClick={() => sair()}>Sair</button>
      </Header>
      <Mainn>
        <SectionDashboard>
          <h1>Ola,{usuario.name}</h1>
          <p>{usuario.course_module}</p>
        </SectionDashboard>

        <DivCabecalhoTec>
          <div className="containerCabecalhoTec">
            <h2>Tecnologias</h2>
            <button onClick={() => abrirModal()}>
              <IoIosAddCircleOutline size={24} />
            </button>
          </div>
        </DivCabecalhoTec>
        <div className="containerModal">
          <Modal
            isOpen={modalEstaAberto}
            onRequestClose={fecharModal}
            overlayClassName="modal-overlay"
            style={customStyles}
          >
            <FormTecnologia />
          </Modal>
        </div>

        <aside className="containerTechs">
          <section className="espacoOndeAsTechsFicam">
            {usuario.techs.map((tecnologias) => (
              <div key={tecnologias.id} className="cardTecnologia">
                <h4>{tecnologias.title}</h4>
                <div className="containerStatusEBtnDeletar">
                  <p>{tecnologias.status}</p>
                  <button onClick={() => deletartech(tecnologias.id)}>
                    <AiFillDelete size={18} />
                  </button>
                </div>
              </div>
            ))}
          </section>
        </aside>
      </Mainn>
    </DivContainerDashboard>
  );
}
