import ShopCard from './ShopCard';

const CardView = ({cards}) => {
  return (
    <div className='products-container'>
        {cards.map(item => ShopCard(item))}
    </div>
    
  )
}

export default CardView