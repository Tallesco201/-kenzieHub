import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { DivImgLogin, FormLogin, Mainn } from "./styleLogin";
import { schemaLogin } from "../../Schemas/schemas";
import { useContext } from "react";
import { DadosUsuarioContext, IdadosLogin } from "../../providers/DadosDoUsuario";

export default function LoginPage() {
  /* const navigate = useNavigate();

  function pegarDadosLogin(dados) {
    console.log(dados);
    api
      .post("sessions", dados)
      .then((response) => {
        console.log("Sucesso => ", response);
        localStorage.setItem("@TOKEN", response.data.token);
        toast(" Seja bem vindo", {
          icon: "👏",
        });
        setTimeout(navigate("/dashboard"), 10000);
        setUsuario(response.data.user);
        console.log("Sucesso =>", response);
      })
      .catch((erro) => {
        toast.error("Senha ou Email incorreto");

        console.log("Erro => ", erro);
      });
  } */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdadosLogin>({
    resolver: yupResolver(schemaLogin),
  });

  const { pegarDadosLogin } = useContext(DadosUsuarioContext);
  return (
    <Mainn>
      <DivImgLogin>
        <img src="assets/Logo.png" alt="Imagem Logo" />
      </DivImgLogin>
      <FormLogin onSubmit={handleSubmit(pegarDadosLogin)}>
        <div className="palavraLogin">
          <h1>Login</h1>
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <span> {errors.email && errors.email.message} </span>

        <label htmlFor="senha">Senha</label>
        <input
          className="inputSenha"
          type="password"
          placeholder="Digite a senha"
          {...register("password")}
        />
        <span> {errors.password && errors.password.message} </span>

        <button type="submit"> Entrar</button>
        <div className="divSpanLogin">
          <p>Ainda não possui conta?</p>
        </div>
        <Link to="/register">Cadastra-se</Link>
      </FormLogin>
    </Mainn>
  );
}

//======================== Senha visivel e nao visivel ===========================

/* const [mostrarSenha, setMostrarSenha] = useState(false);

function senhaVisivel(event) {
  event.preventDefault();
  setMostrarSenha(true);
}
function senhaNAOVisivel(event) {
  event.preventDefault();

  setMostrarSenha(false);
} */

/* {mostrarSenha === false ? (
  <DivContainerSenhaLogin>
    <label htmlFor="senha">Senha</label>
    <DivSenha>
      <input
        className="inputSenha"
        type="password"
        placeholder="Digite a senha"
      />
      <button onClick={(e) => senhaVisivel(e)}> mostrar</button>
    </DivSenha>
  </DivContainerSenhaLogin>
) : (
  <DivContainerSenhaLogin>
    <label htmlFor="senha">Senha</label>
    <DivSenha>
      <input
        className="inputSenha"
        type="text"
        placeholder="Digite a senha"
      />
      <button onClick={(e) => senhaNAOVisivel(e)}>Não Mostrar</button>
    </DivSenha>
  </DivContainerSenhaLogin>
)} */

//=======================================================================
