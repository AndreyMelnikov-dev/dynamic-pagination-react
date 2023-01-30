import axios, { AxiosResponse } from 'axios'

class PhotosAPi {
    async getPhotos(page: string = '1', limit: number = 5) {
        const response: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
        return response.status === 200 ? { photos: response.data, total: response.headers['x-total-count'] } : { photos: [], total: 0 }
    }
}

export default new PhotosAPi()