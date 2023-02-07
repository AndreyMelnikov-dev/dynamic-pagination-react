import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import IPhoto from '../models/IPhoto'
import photosApi from '../http/photos-api'
import { RootState } from './store'

interface IPhotosSlice {
    photos: IPhoto[]
    isLoading: boolean
    totalCount: number
    limit: number
}

const initialState: IPhotosSlice = {
    photos: [] as IPhoto[],
    isLoading: false,
    totalCount: 0,
    limit: 100
}

export const fetchPhotos = createAsyncThunk(
    'photos/fetchPhotos',
    async (page: string, { dispatch }) => {
        dispatch(setLoading(true))
        const photosFromApi = await photosApi.getPhotos(page, 10)
        dispatch(setPhotos(photosFromApi.photos))
        dispatch(setTotal(photosFromApi.total))
        dispatch(setLoading(false))
    }
)

export const fetchPhotosInfinity = createAsyncThunk(
    'photos/fetchPhotosInfinity',
    async (page: string, { dispatch, getState }) => {
        const { photos }:any = getState()
        dispatch(setLoading(true))
        const photosFromApi = await photosApi.getPhotos(page, 10)
        dispatch(setPhotos([...photos.photos, ...photosFromApi.photos]))
        dispatch(setTotal(photosFromApi.total))
        dispatch(setLoading(false))
    }
)

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setPhotos(state, aciton) {
            state.photos = [...aciton.payload]
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        setTotal(state, action) {
            state.totalCount = action.payload
        }
    },
})

export const { setPhotos, setLoading, setTotal } = photosSlice.actions
export default photosSlice.reducer