import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Item from '../Item/Item'
import PaginationBullet from '../PaginationBullet/PaginationBullet'
import photosApi from '../../http/photos-api'
import IPhoto from '../../models/IPhoto'

const SimplePagination = () => {

    const pageId = useParams().id
    const [photos, setPhotos] = useState<Array<IPhoto>>([])
    const [isLoading, setLoading] = useState<boolean>(true)
    const [totalCount, setTotalCount] = useState<number>(0)

    useEffect(() => {
        getPhotos()
    }, [pageId])

    const getPhotos = async () => {
        setLoading(true)
        const photosData: null | IPhoto[] = await photosApi.getPhotos(pageId)
        if (photosData == null) {
            setPhotos([])
        }
        else {
            setPhotos([...photosData])
        }
        setLoading(false)
    }

    const photosList = photos.map((item: IPhoto) => <Item key={item.id} {...item} />)

    return (
        <div className='catalog'>
            <div className='catalog__list'>
                {photosList.length ? photosList : 'Nothing'}
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