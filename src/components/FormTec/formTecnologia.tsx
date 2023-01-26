import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { DadosUsuarioContext, ICadastroDeUmaNovaTecnologia } from "../../providers/DadosDoUsuario";
import { schemaFormTecnologia } from "../../Schemas/schemas";
import { Aside, SectionModalTecnologia } from "./styleFormTecnologia";

export function FormTecnologia() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICadastroDeUmaNovaTecnologia>({
    resolver: yupResolver(schemaFormTecnologia),
  });

  const { pegarDadosFormDeTecnologia, fecharModal } =
    useContext(DadosUsuarioContext);

  return (
    <Aside>
      <header>
        <h3>Cadastrar tecnologia</h3>
        <button onClick={() => fecharModal()}>
          <AiOutlineClose />
        </button>
      </header>
      <SectionModalTecnologia>
        <form
          className="form"
          onSubmit={handleSubmit(pegarDadosFormDeTecnologia)}
        >
          <label>Nome</label>
          <input
            {...register("title")}
            name="title"
            placeholder="Ex: React"
          />
          <span>{errors.title && errors.title.message}</span>

          <label>Selecionar status</label>
          <select id="Sstatus" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span>{errors.status && errors.status.message}</span>

          <button className="button" type="submit">
            Cadastrar tecnologia
          </button>
        </form>
      </SectionModalTecnologia>
    </Aside>
  );
}
