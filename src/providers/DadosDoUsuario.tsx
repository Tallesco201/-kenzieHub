/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export interface iDadosUsuarioContextProps {
  children: React.ReactNode;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IWorks {
  title: string;
  description: string;
  deploy_url: string;
}

export interface IUsuario {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
  works?: IWorks[];
}

export interface IdadosLogin {
  email: string;
  password: string;
}

export interface IRegistroDoUsuario {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ICadastroDeUmaNovaTecnologia {
  title: string;
  status: string;
}

export interface IRequisicaoLogin {
  token: string;
  user: IUsuario;
}

export interface IRequisicaoCadastro {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  avatar_url: null | string;
  works: IWorks[];
  created_at: string;
  techs: ITech[];
  updated_at: string;
}

export interface IRequisicaoBuscarUsuario {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  avatar_url: null | string;
  works: IWorks[];
  created_at: string;
  techs: ITech[];
  updated_at: string;
}

export interface IRequisicaoCadastroTecnologia {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
  user: { id: string };
}

export interface IRequisicaoDeletarTech {
  data: string;
}

export interface IDadosUsuarioContext {
  pegarDadosCadastro: (dadosCadastro: IRegistroDoUsuario) => void;
  pegarDadosLogin: (dadosLogin: IdadosLogin) => void;
  usuario: IUsuario;
  pegarDadosFormDeTecnologia: (
    dadosFormTecnologia: ICadastroDeUmaNovaTecnologia
  ) => void;
  deletartech: (techid: string) => void;
  abrirModal: () => void;
  fecharModal: () => void;
  token: string | null;
  modalEstaAberto: boolean;
  navigate: NavigateFunction;
}

export const DadosUsuarioContext = createContext({} as IDadosUsuarioContext);

export function DadosUsuarioProvider({ children }: iDadosUsuarioContextProps) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({} as IUsuario);
  const token = localStorage.getItem("@TOKEN");
  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  function abrirModal() {
    setModalEstaAberto(true);
  }

  function fecharModal() {
    setModalEstaAberto(false);
  }

  function pegarDadosCadastro(dadosCadastro: IRegistroDoUsuario) {
    // console.log(dadosCadastro);
    api
      .post<IRequisicaoCadastro>("users", dadosCadastro)
      .then((response) => {
        toast.success(" Usuario criado com sucesso");
        // console.log("SucessoCadastro => ", response);
        return navigate("/");
      })
      .catch((error) => {
        toast.error("Algo deu errado");
        console.log("Erro => ", error);
      });
  }

  function pegarDadosLogin(dadosLogin: IdadosLogin) {
    api
      .post<IRequisicaoLogin>("sessions", dadosLogin)
      .then((response) => {
        // console.log("SucessoLogin => ", response);
        localStorage.setItem("@TOKEN", response.data.token);
        toast.success(" Login realizado com sucesso");

        navigate("/dashboard");
        setUsuario(response.data.user);
        console.log("SucessoLogin =>", response);
      })
      .catch((erro) => {
        toast.error("Senha ou Email incorreto");

        console.log("Erro => ", erro);
      });
  }

  const buscarUsuario = () => {
    api
      .get<IRequisicaoBuscarUsuario>("profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setUsuario(res.data);
        // console.log("SucessoBuscarUsuario =>", res);
      })
      .catch((err) => console.log(err));
  };

  function pegarDadosFormDeTecnologia(
    dadosFormTecnologia: ICadastroDeUmaNovaTecnologia
  ) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .post<IRequisicaoCadastroTecnologia>("users/techs", dadosFormTecnologia)
      .then((response) => {
        buscarUsuario();
        // console.log("SucessoCadastroTecnologia => ", response);
        toast.success("Tecnologia cadastrada");
        fecharModal();
      })
      .catch(() => toast.error("Tecnologia ja cadastrada ou campus vagos"));
  }

  const deletartech = (techid: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .delete<IRequisicaoDeletarTech>(`users/techs/${techid}`)
      .then((res) => {
        buscarUsuario();
        // console.log("SucessoTechDeletada =>", res);
        toast("Tecnologia deletada 🗑️", {
          icon: "✅",
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      api
        .get("profile")
        .then((response) => {
          // setTechs(response.data.user.techs);

          toast(" Seja bem vindo", {
            icon: "👏",
          });
          navigate("/dashboard");
          setUsuario(response.data);
          // console.log("SucessoUseEffect =>", response);
        })
        .catch((error) => console.log("ErroUseEffect =>", error));
    } else {
      localStorage.removeItem("@TOKEN");
    }
  }, []);

  return (
    <DadosUsuarioContext.Provider
      value={{
        pegarDadosCadastro,
        pegarDadosLogin,
        usuario,
        pegarDadosFormDeTecnologia,
        deletartech,
        token,
        fecharModal,
        abrirModal,
        modalEstaAberto,
        navigate,
      }}
    >
      {children}
    </DadosUsuarioContext.Provider>
  );
}
