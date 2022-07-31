import Frontend from "../templates/frontend"
import * as S from "./styles";

import ProductInformation from "../organisms/ProductInformation";
import ProductStats from "../organisms/ProductStats";

function App() {
  return (
    <Frontend>
     <S.Container>
       <ProductInformation/>

      <ProductStats/>
     </S.Container>
    </Frontend> 
  );
}

export default App
