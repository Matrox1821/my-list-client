import React from 'react';
import './styles.scss';

type Props = {
  title: string;
  src: string;
  reverse: boolean;
  description: boolean;
};
const Card = ({ title, src, reverse = false }: Props) => {
  return (
    <div className={`card ${reverse ? 'reverse' : ''}`}>
      <div className='card__title'>Eminencia de las Sombras</div>
      <div className='containerImage'>
        <img src={src} alt={title} />
      </div>
    </div>
  );
};
export default Card;
