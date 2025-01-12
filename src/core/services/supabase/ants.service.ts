'use server'

import { Ant, GridAnt, supabase } from "@/core";

interface PaginationOptions {
    page?: number;
    take?: number;
}

export const getPaginatedAnts = async ({ page = 1, take = 12 }: PaginationOptions) => {
    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1
    if (isNaN(Number(take))) take = 12;
    if (take < 1) take = 12

    try {
        const { data: ants, error } = await supabase
            .from('ant_grid')
            .select('*')
            .order('genus', { ascending: true })
            .order('species', { ascending: true })
            .range((page - 1) * take, ((page - 1) * take) + take - 1);

        const { data: dataCount, count } = await supabase
            .from('ant_grid')
            .select('*', { count: 'exact', head: true });

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

export const getAntById = async (id: number) => {

    try {
        const { data: ant, error: antError } = await supabase
            .from('ant_summary_table')
            .select('*')
            .eq('id', id);

        const { data: images, error: imagesError } = await supabase
            .from('ant_images')
            .select('image, appointment')
            .eq('id_ant', id);

        const { data: synonyms, error: synonymsError } = await supabase
            .from('ant_synonyms')
            .select('synonym')
            .eq('id_ant', id)

        return {
            ant: ant![0] as Ant,
            images: images ?? [],
            synonyms: synonyms ?? []
        }
    } catch (error) {
        throw new Error('No se pudo obtener los datos asignados al id ' + id);
    }

}