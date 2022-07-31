import { FiArrowUp } from 'react-icons/fi'
import * as S from './styles'

const CardActivety = () => {
  return(
    <S.Container>
      <small>Actifity</small>
      <div>
        <span>18</span>
        <FiArrowUp size={25} color="#fff" />
      </div>

      <i className="circle1"></i>
      <i className="circle2"></i>
      <i className="circle3"></i>
    </S.Container>
  )    
}

export default CardActivety
