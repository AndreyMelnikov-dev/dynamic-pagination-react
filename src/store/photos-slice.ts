import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import IPhoto from '../models/IPhoto'
import photosApi from '../http/photos-api'

interface IPhotosSlice {
    photos: IPhoto[]
    isLoading: boolean
    totalCount: number
}

const initialState: IPhotosSlice = {
    photos: [] as IPhoto[],
    isLoading: true,
    totalCount: 0
}

export const fetchPhotos = createAsyncThunk(
    'photos/fetchPhotos',
    async (page: string, { rejectWithValue, dispatch }) => {
        dispatch(setLoading(true))
        const photosFromApi = await photosApi.getPhotos(page)
        dispatch(setPhotos(photosFromApi.photos))
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