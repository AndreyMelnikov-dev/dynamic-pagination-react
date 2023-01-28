import { useEffect } from 'react'
import { useParams } from 'react-router'
import Item from '../Item/Item'
import IPhoto from '../../models/IPhoto'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { fetchPhotos } from '../../store/photos-slice'
import CatalogPagination from './CatalogPagination/CatalogPagination'

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
            </div>
            <CatalogPagination total={photosState.totalCount} />
        </div>
    )
}

export default SimplePagination