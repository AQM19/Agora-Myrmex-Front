'use server'

import { Ant, GridAnt, ImageAnt, supabase } from "@/core";

interface PaginationOptions {
    page?: number;
    take?: number;
    filter?: string;
}

export const getPaginatedAnts = async ({ page = 1, take = 12, filter }: PaginationOptions) => {
    debugger;
    
    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1
    if (isNaN(Number(take))) take = 12;
    if (take < 1) take = 12

    try {
        let query = supabase
            .from('ant_grid')
            .select('*')
            .order('genus', { ascending: true })
            .order('species', { ascending: true })
            .range((page - 1) * take, ((page - 1) * take) + take - 1);

        let queryCount = supabase
            .from('ant_grid')
            .select('*', { count: 'exact', head: true });

        // Si el filtro está presente, se aplica a las columnas genus y species
        if (filter) {
            const filterParts = filter.split(' ');

            // Si se tiene solo el género (1 palabra), se aplica al genus
            if (filterParts[0]) {
                query = query.ilike('genus', `%${filterParts[0]}%`);
                queryCount = queryCount.ilike('genus', `%${filterParts[0]}%`)
            }

            // Si se tiene también la especie (2 palabras), se aplica a species
            if (filterParts[1]) {
                query = query.ilike('species', `%${filterParts[1]}%`);
                queryCount.ilike('species', `%${filterParts[0]}%`)
            }
        }

        const { data: ants, error } = await query;
        const { data: dataCount, count } = await queryCount;
        const totalCount: number = count || 0;
        const totalPages = Math.ceil(totalCount / take);

        return {
            currentPage: page,
            totalPages: totalPages,
            ants: ants as GridAnt[] ?? []
        }
    } catch (error) {
        throw new Error('No se pudieron obtener los datos de las hormigas: ' + error);
    }
}

export const getAntByGenusAndSpecies = async (genus: string, species: string) => {
    try {
        const { data: ant, error: antError } = await supabase
            .from('ant_summary_table')
            .select('*')
            .eq('genus', genus)
            .eq('species', species);

        const { data: images, error: imagesError } = await supabase
            .from('ant_images')
            .select('image, appointment')
            .eq('id_ant', ant![0].id);

        const { data: synonyms, error: synonymsError } = await supabase
            .from('synonyms')
            .select('synonym')
            .eq('id_ant', ant![0].id)

        return {
            ant: ant![0] as Ant,
            images: images as ImageAnt[] ?? [],
            synonyms: synonyms ?? []
        }
    } catch (error) {
        throw new Error('No se pudo obtener los datos de la especie ' + genus + '' + species);
    }
}