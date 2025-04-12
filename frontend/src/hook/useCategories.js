import { useQuery } from "@tanstack/react-query";
import { categoriesApi } from '../services/categoryServices'
export default function useCategories() {
    const { isLoading, data } = useQuery({
        queryKey: ['categories'],
        queryFn: categoriesApi
    })

    const { categories: rawCategories = [] } = data || [];
    
    const categories = rawCategories.map(item => (
        { label: item.title, value: item._id }
    ))
    const transformedCategories = rawCategories.map(item => (
        { label: item.title, value: item.englishTitle }
    ))

    return { isLoading, categories , transformedCategories , rawCategories}

}