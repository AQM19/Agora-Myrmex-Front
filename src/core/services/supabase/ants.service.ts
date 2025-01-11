'use server'

import { Ant, supabase } from "@/core";

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
            .from('ant_summary_table')
            .select('*')
            .range((page - 1) * take, ((page - 1) * take) + take - 1);

        const { data: dataCount, count } = await supabase
            .from('ant_summary_table')
            .select('*', { count: 'exact', head: true });

        const totalCount: number = count || 0;

        const totalPages = Math.ceil(totalCount / take);

        return {
            currentPage: page,
            totalPages: totalPages,
            ants: ants as Ant[]
        }
    } catch (error) {
        throw new Error('No se pudieron obtener los datos de las hormigas: ' + error);
    }
}