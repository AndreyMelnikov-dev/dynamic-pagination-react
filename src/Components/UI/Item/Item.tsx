import { FC } from 'react'
import IPhoto from '../../../models/IPhoto'



const Item: FC<IPhoto> = (props) => {
    return (
        <div className='item'>
            <img className='item__img' src={props.thumbnailUrl} alt='' />
            <h2 className='item__title'>{props.title}</h2>
        </div>
    )
}

export default Item