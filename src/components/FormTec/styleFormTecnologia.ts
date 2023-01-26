import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  background: #212529;
  background: #212529;
  width: 370px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  
  @media only screen and (max-width: 425px) {
    width: 300px;
  }
  @media only screen and (max-width: 340px) {
    width: 260px;
  }
}
  header {
    display: flex;
    height: 50px;
    width: 320px;
    width: 100%;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    h3 {
      margin-left: 5%;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
    }

    button {
      margin-right: 5%;
      background: transparent;
      border: none;
      cursor: pointer;
    }

`;

export const SectionModalTecnologia = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;

    label {
      margin-bottom: 23px;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 0px;
      color: #f8f9fa;
    }
    input {
      height: 48px;
      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      margin-bottom: 30px;
    }
    input::placeholder {
      padding: 15px;
      font-weight: 400;
      font-size: 14.2426px;
      line-height: 26px;
    }
    select {
      height: 48px;
      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      margin-bottom: 30px;

      option {
        margin-bottom: 30px;
      }
    }
    button {
      height: 48px;
      width: 100%;
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      margin-bottom: 15px;
    }
  }
`;
