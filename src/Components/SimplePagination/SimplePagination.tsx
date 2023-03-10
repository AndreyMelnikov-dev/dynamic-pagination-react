import { useEffect } from 'react'
import { useParams } from 'react-router'
import Item from '../UI/Item/Item'
import IPhoto from '../../models/IPhoto'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { fetchPhotos } from '../../store/photos-slice'
import CatalogPagination from '../UI/CatalogPagination/CatalogPagination'
import Preloader from '../UI/Preloader/Preloader'

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
                {photosState.isLoading ? <Preloader /> : photosList}
            </div>
            <CatalogPagination activeId={parseInt(pageId)} total={photosState.totalCount / photosState.limit} />
        </div>
    )
}

export default SimplePagination