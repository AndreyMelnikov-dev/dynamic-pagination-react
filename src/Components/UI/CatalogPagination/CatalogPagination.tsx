import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface ICatalogPaginationProps {
    total: number,
    activeId: number
}

const CatalogPagination: FC<ICatalogPaginationProps> = (props) => {

    return (
        <div className='catalog__pagination'>
            {props.activeId !== 1 && <NavLink to={`/simple/${props.activeId - 1}`}>Prev</NavLink>}
            <div className=''>{props.activeId}</div>
            <span>/</span>
            <div className=''>{props.total}</div>
            {props.activeId !== props.total && <NavLink to={`/simple/${props.activeId + 1}`}>Next</NavLink>}
        </div >
    )
}

export default CatalogPagination