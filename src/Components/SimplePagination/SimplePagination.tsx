import { useEffect } from 'react'
import { useParams } from 'react-router'
import Item from '../Item/Item'
import PaginationBullet from '../PaginationBullet/PaginationBullet'
import IPhoto from '../../models/IPhoto'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { fetchPhotos } from '../../store/photos-slice'

const SimplePagination = () => {
    const dispatch = useDispatch<AppDispatch>()
    const pageId = useParams().id || '1'

    const photosState = useSelector((state: RootState) => state.photos)

    useEffect(() => {
        dispatch(fetchPhotos(pageId))
    }, [pageId])

    const photosList = photosState.photos.map((item: IPhoto) => <Item key={item.id} {...item} />)

    return (
        <div className='catalog'>
            <div className='catalog__list'>
                {photosState.isLoading ? 'Loading...' : photosList}
                {/* {photosList.length ? photosList : 'Nothing'} */}
            </div>
            <div className='catalog__pagination'>
                <PaginationBullet>1</PaginationBullet>
                <PaginationBullet>2</PaginationBullet>
                <PaginationBullet>3</PaginationBullet>
                <PaginationBullet>4</PaginationBullet>
                <PaginationBullet>5</PaginationBullet>
                <PaginationBullet>6</PaginationBullet>
                <PaginationBullet>7</PaginationBullet>
                <PaginationBullet>8</PaginationBullet>
            </div>
        </div>
    )
}

export default SimplePagination