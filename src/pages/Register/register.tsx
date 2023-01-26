import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { DadosUsuarioContext, IRegistroDoUsuario } from "../../providers/DadosDoUsuario";
import { schemaRegister } from "../../Schemas/schemas";

import {
  DivContainerFormRegister,
  DivImgRegister,
  DivSlogan,
  FormRegister,
  Mainn,
} from "./styleRegister";
export default function RegisterLogin() {
  /*   const navigate = useNavigate();
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistroDoUsuario>({
    resolver: yupResolver(schemaRegister),
  });

  /*   function pegarDadosCadastro(dados) {
    console.log(dados);
    api
      .post("users", dados)
      .then((response) => {
        toast.success(" Usuario criado com sucesso");
        console.log("Sucesso => ", response);
        return navigate("/");
      })
      .catch((error) => {
        toast.error("Algo deu errado");
        console.log("Erro => ", error);
      });
  } */

  const { pegarDadosCadastro } = useContext(DadosUsuarioContext);

  return (
    <Mainn>
      <DivImgRegister>
        <img src="assets/Logo.png" alt="" />
        <Link to="/">Voltar</Link>
      </DivImgRegister>
      <DivContainerFormRegister>
        <DivSlogan>
          <h1>Crie sua conta</h1>
          <p>Rapido e grátis, vamos nessa</p>
        </DivSlogan>
        <FormRegister onSubmit={handleSubmit(pegarDadosCadastro)}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name && errors.name.message}</span>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite seu Email"
            {...register("email")}
          />
          <span>{errors.email && errors.email.message}</span>

          <label htmlFor="senha">Senha</label>
          <input
            type="text"
            placeholder="Digite a senha"
            {...register("password")}
          />
          <span>{errors.password && errors.password.message}</span>

          <label htmlFor="confirmar senha">Confirme sua senha</label>
          <input
            type="text"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <span>
            {errors.confirmPassword && errors.confirmPassword.message}
          </span>

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            placeholder="Fale sobre voce"
            {...register("bio")}
          />
          <span>{errors.bio && errors.bio.message}</span>

          <label htmlFor="contato">Contato</label>
          <input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <span>{errors.contact && errors.contact.message}</span>

          <label htmlFor="selecionar Modulo">Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="Primeiro Modulo">Primeiro Modulo</option>
            <option value="Segundo Modulo">Segundo Modulo</option>
            <option value="Terceiro Modulo">Terceiro Modulo</option>
            <option value="Quarto Modulo">Quarto Modulo</option>
            <option value="Quinto Modulo">Quinto Modulo</option>
            <option value="Sexto Modulo">Sexto Modulo</option>
          </select>
          <span>{errors.course_module && errors.course_module.message}</span>

          <button type="submit">Cadastrar</button>
        </FormRegister>
      </DivContainerFormRegister>
    </Mainn>
  );
}
