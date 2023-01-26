import styled from "styled-components";

export const Mainn = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .palavraLogin {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 28px;
    margin-bottom: 42px;
  }
`;

export const DivImgLogin = styled.div`
  text-align: center;
  margin-bottom: 36px;
  img {
    width: 144.06px;
    height: 19.97px;
  }
`;
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 502px;
  width: 370px;
  background: #212529;
  padding: 42px 10px 20px 10px;
  border-radius: 10px;
  @media only screen and (max-height:650px){
      height: 100%;
      }


  @media only screen and (max-width: 425px) {
    width: 300px;
  }
  @media only screen and (max-width: 321px) {
    width: 280px;
  }
  label {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
    margin-bottom: 10%;
  }

  input {
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    margin-bottom: 17%;
    padding-left: 15px;
    color: #f8f9fa;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
  }
  button {
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    cursor: pointer;
    margin-bottom: 17%;
  }

  button:hover {
    background: #ff427f;
    transition: all 0.5s;
  }

  .divSpanLogin {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 11%;

    p {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #868e96;
    }
  }

  a {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #868e96;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    cursor: pointer;
  }
  a:hover {
    background: #343b41;
    transition: all 0.2s;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: #ff6961;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

//======================== Senha visivel e nao visivel ===========================

/* export const DivContainerSenhaLogin = styled.div`
  display: flex;
  flex-direction: column;
`; */

/* export const DivSenha = styled.div`
  display: flex;

  input:focus {
    outline: 0;
  }
  button {
    border: none;
  }
  button:focus {
    outline: thin dotted;
    
  }
`; */

//=======================================================================
