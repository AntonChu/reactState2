import ShopItem from "./ShopItem"

const ListView = ({cards}) => {
  return (
    <div className='list-container'>
        {cards.map(item => ShopItem(item))}
    </div>
    
  )
}

export default ListView