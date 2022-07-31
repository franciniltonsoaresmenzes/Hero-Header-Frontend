import * as S from './styles';
import HeroHeaderImage from './../../assets/perfil.png'
import CardActivety from './../../molecules/CardActivety' 
import CardChart from '../../atoms/CardChart';

const ProductStats: React.FC = () => {
  return (
     <S.Container>
      <CardActivety/> 

      <CardChart/>
      <img src={HeroHeaderImage} alt=""/>
    </S.Container>
 );
}

export default ProductStats;
