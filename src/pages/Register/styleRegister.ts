import styled from "styled-components";

export const Mainn = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  width: 370px;
  height: 100%;
  padding: 10px;
`;

export const DivImgRegister = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;

  a {
    width: auto;
    display: flex;
    height: 40.11px;
    padding: 0px 16.2426px;
    background: #212529;
    display: flex;
    align-items: center;
  }
  img {
    width: 122.06px;
    height: 21.21px;
  }
`;

export const DivSlogan = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  padding-top: 42px;
  h1 {
    margin-bottom: 23px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
`;

export const DivContainerFormRegister = styled.div`
  display: flex;
  flex-direction: column;
  background: #212529;
  border-radius: 8px;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 15px 30px 15px;

  label {
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 14px;
    line-height: 0px;
    font-style: normal;
    color: #f8f9fa;
  }
  input {
    margin-bottom: 27px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    height: 48px;
    padding-left: 15px;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
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

  select {
    margin-bottom: 27px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    height: 48px;
    padding-left: 15px;

    option {
      font-size: 14px;
    }
  }

  button {
    background: #59323f;
    height: 48px;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ff577f;
    transition: all 0.5s;
  }
`;
