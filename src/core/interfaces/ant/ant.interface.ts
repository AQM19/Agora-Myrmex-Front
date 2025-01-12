import { AntFounding } from "@/core/types/ant_properties/ant_founding.type";
import { ColonyForm } from "@/core/types/ant_properties/colony_form.type";

export interface ResumeAnt {
    id: number | null,
    genus: string | null,
    species: string | null,
}

export interface GridAnt extends ResumeAnt {
    image: string | null;
    appointment: string | null;
}

export interface Ant extends ResumeAnt {
    common_name: string | null,
    distribution: string | null,
    colony_form: ColonyForm | null,
    founding: AntFounding | null,
    colony_size: string | null,
    queen_size_min: string | null,
    queen_size_max: string | null,
    worker_size_min: string | null,
    worker_size_max: string | null,
    soldier_size_min: string | null,
    soldier_size_max: string | null,
    male_size_min: string | null,
    male_size_max: string | null,
    humidity_min: string | null,
    humidity_max: string | null,
    nest_humidity_min: string | null,
    nest_humidity_max: string | null,
    temperature_min: string | null,
    temperature_max: string | null,
    nest_temperature_min: string | null,
    nest_temperature_max: string | null,
    diapause: string | null,
    diapause_from: string | null,
    diapause_to: string | null,
    diapause_threshold: string | null,
    nuptial_flight: string | null,
    nuptial_flight_from: string | null,
    nuptial_flight_to: string | null,
    egg_development_time: string | null,
    colony_lifespan: string | null,
    description: string | null,
    kingdom: string | null,
    phylum: string | null,
    class: string | null,
    order: string | null,
    family: string | null,
    subfamily: string | null,
    tribe: string | null,
}