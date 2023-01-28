import { FC } from 'react'
import PaginationBullet from '../../PaginationBullet/PaginationBullet'

interface ICatalogPaginationProps {
    total: number
}


const CatalogPagination: FC<ICatalogPaginationProps> = (props) => {

    const paginationBulletsList = []
    for (let i = 1; i <= 100; i++) {
        paginationBulletsList.push(<PaginationBullet>{i.toString()}</PaginationBullet>)
    }


    return (
        <div className='catalog__pagination'>
            {paginationBulletsList}
        </div>
    )
}

export default CatalogPagination