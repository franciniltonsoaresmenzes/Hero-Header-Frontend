import { useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import * as S from './styles';

const CardChart: React.FC = () => {
  const amountBras = Array.from(Array(12).keys())

  const fillZero = useCallback((value: number) => {
    const number = (value + 1 ).toString()
    return number.padStart(2,"0")
  }, []) 

  return (
   <S.Container>
    <div>
      <FiArrowLeft />
      <strong>Stats</strong>
      <FiArrowRight/>
    </div>

    <S.Chart>
      {amountBras.map(
        item => 
          <>
            <div key={String(item)}>
              <div> 
                <span></span>
              </div>
              <small>{fillZero(item)}</small>
            </div>
          </>
      )}
    </S.Chart> 
   </S.Container>
 );
}

export default CardChart;
