import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPhotosInfinity } from '../../store/photos-slice'
import { RootState, AppDispatch } from '../../store/store'
import Item from '../UI/Item/Item'
import Preloader from '../UI/Preloader/Preloader'
import IPhoto from '../../models/IPhoto'

const IntervalPagination = () => {

    const dispath = useDispatch<AppDispatch>()
    const photosState = useSelector((state: RootState) => state.photos)
    const [fetching, setFetching] = useState<boolean>(true)
    const [actualPage, setActualPage] = useState<number>(1)


    useEffect(() => {

        if (fetching) {
            dispath(fetchPhotosInfinity(actualPage.toString()))
            setFetching(false)
            setActualPage(prevState => prevState + 1)
        }
    }, [fetching])

    useEffect(() => {

        const paginationInterval = setInterval(() => {
            if (window.pageYOffset + window.innerHeight > document.documentElement.scrollHeight - 50 && photosState.photos.length != photosState.totalCount) {
                clearInterval(paginationInterval)
                setFetching(true)
            }
        }, 200)
        
    }, [actualPage, photosState.totalCount])

    console.log(actualPage)
    
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

export default IntervalPagination