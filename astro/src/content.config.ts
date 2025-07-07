import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const clothings = defineCollection({ 
    loader: async () => {
        const strapiResponse = await fetch("http://localhost:1337/api/clothings?populate=*")
        const rawData = await strapiResponse.json()
        const data = rawData.data.map((clothing: Record<string, any>) => {
            console.log("clothing: ", clothing)
            return {
                ...clothing,
                id: clothing.documentId,
            }
        })
        console.log(data)
        return data
    }
 });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { clothings };