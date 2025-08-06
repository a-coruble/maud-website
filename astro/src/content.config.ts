import { defineCollection } from 'astro:content';

// 3. Define your collection(s)
const clothings = defineCollection({ 
    loader: async () => {
        const strapiResponse = await fetch(`${import.meta.env.STRAPI_BASE_URL}/api/clothings?populate=*`)
        const rawData = await strapiResponse.json()
        const data = rawData.data.map((clothing: Record<string, any>) => {
            return {
                ...clothing,
                id: clothing.documentId,
            }
        })
        return data
    }
 });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { clothings };