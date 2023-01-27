import axios, { AxiosResponse } from 'axios'

class PhotosAPi {
    async getPhotos(page: string = '1') {
        const response: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=5&_page=${page}`)
        return response.status === 200 ? response.data : null
    }
}

export default new PhotosAPi()