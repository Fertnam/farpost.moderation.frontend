import axios from 'axios'
import AdvertisementType from '../types/Advertisement'

type AdvertisementsApiResult = {
    fetchAdvertisements: (page: number) => Promise<AdvertisementType[]>
}

function useAdvertisementsApi(): AdvertisementsApiResult {
    async function fetchAdvertisements(page: number) {
        const url = `${process.env.REACT_APP_API}/advertisements`
        const { data } = await axios.get<AdvertisementType[]>(url)

        return data
    }

    return { fetchAdvertisements }
}

export default useAdvertisementsApi
