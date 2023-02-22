import ListView from './ListView';
import CardView from './CardView';

const IconSwitch = ({icon, onSwitch, cards}) => {
    return (
        <>
            <div className='icon' onClick={onSwitch}>{icon}</div>
            <div>{ icon === 'view_module' ? <CardView cards={cards} /> : <ListView cards={cards} />}</div>
        </>
        
    )
}

export default IconSwitch