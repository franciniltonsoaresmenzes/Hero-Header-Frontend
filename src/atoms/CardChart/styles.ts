import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 210px;
  height: 210px;
  bottom: -50px;
  left: 30px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;

  padding: 30px 20px;
  animation: showOnPage 1s linear forwards;
  opacity: 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-weight: 500;
    } 
  }

  @keyFrames showOnPage { 
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }
  
`;

function generateBars() {
  const amountBras = [...Array(12).keys()]

  let stylesSpan: any = []

  amountBras.forEach(item => {
    stylesSpan.push(`
      div:nth-child(${item + 1}) {
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;

        div {
          background-color: #eff3fe;
          height: 91px;
          width: 2.1px;
          border-radius: 5px;
          display: flex;
          justify-content: flex-end;

          span {
            background-color: #5236ff;
            display: block;
            height: 0;
            animation: animationHeight 1s linear forwards;
            max-height: ${Math.ceil(Math.random() * 100)}px;
            width: 3.5px;
            border-radius: 5px;
          }
        }
        small {
          color: #BACCFD;
          font-size: 10px;
          margin-top: 5px;
        }
      }
    `)
  })

  return stylesSpan.join("")
}

export const Chart = styled.div `
  margin-top: 28px;
  ${generateBars}

  @keyFrames animationHeight { 
    from {
      height: 0px;
    }
    to {
      height: 91px;
    }
  }
`;

