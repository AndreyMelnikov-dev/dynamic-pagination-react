import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPhotosInfinity } from '../../store/photos-slice'
import { RootState, AppDispatch } from '../../store/store'
import Item from '../UI/Item/Item'
import Preloader from '../UI/Preloader/Preloader'
import IPhoto from '../../models/IPhoto'

const ScrollPagination = () => {

    const dispath = useDispatch<AppDispatch>()
    const photosState = useSelector((state: RootState) => state.photos)
    const [actualPage, setActualPage] = useState<number>(1)
    const [fetching, setFetching] = useState<boolean>(true)

    const scrollHandler = () => {
        const offsetTop = window.pageYOffset
        const windowHeight = window.innerHeight
        const pageHeight = document.documentElement.scrollHeight
        if (offsetTop + windowHeight > pageHeight - 50) {
            setFetching(true)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(() => {
        if (fetching) {
            dispath(fetchPhotosInfinity(actualPage.toString()))
            setActualPage(prevState => prevState + 1)
            setFetching(false)
        }
    }, [fetching])

    const photosList = photosState.photos.map((photo: IPhoto) => <Item key={photo.id} {...photo} />)

    return (
        <div className='catalog'>
            <div className='catalog__list'>
                {photosList}
            </div>
            {photosState.isLoading && <Preloader />}
        </div>
    )
}

export default ScrollPagination