import styled from "styled-components";

export const DivContainerDashboard = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 72px;
  width: 100%;
  border-bottom: 2px #212529 solid;

  img {
    width: 105.53px;
    height: 14.63px;
  }

  button {
    height: 32px;
    background: #212529;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    border: transparent;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: #f8f9fa;
  }
`;

export const Mainn = styled.main`
  display: flex;
  flex-direction: column;

  .containerTechs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .espacoOndeAsTechsFicam {
      width: 95%;
      max-width: 900px;
      max-height: 380px;
      height: 350px;
      overflow-y: scroll;
      background: #212529;
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media only screen and (max-height:620px){
      height: 100%;
      max-height: 250px;
      
      }

      .cardTecnologia {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        height: 60px;
        background: #121214;
        border-radius: 10px;
        margin-bottom: 15px;
        margin-top: 10px;
        cursor: pointer;

        h4 {
          font-weight: 700;
          font-size: 18.21px;
          line-height: 22px;
          margin-left: 5%;
        }

        .containerStatusEBtnDeletar {
          display: flex;
          align-items: center;
          height: 60px;
          justify-content: space-between;
          width: 20%;

          @media only screen and (max-width: 768px) {
            width: 50%;
          }

          p {
            font-weight: 400;
            font-size: 12.182px;
            line-height: 22px;
            color: #868e96;
          }

          button {
            border: none;
            background: transparent;
            margin-right: 15%;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const SectionDashboard = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 118px;
  border-bottom: 2px #212529 solid;
  margin-bottom: 15px;

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
`;
export const DivCabecalhoTec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  width: 100%;
  .containerCabecalhoTec {
    width: 100%;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0% 10%;
  }

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    background: transparent;
    border: none;
    background: #212529;
    border-radius: 4px;
  }
`;
