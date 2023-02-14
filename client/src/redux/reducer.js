import {
    GET_COUNTRIES,
    GET_COUNTRIES_BY_ID,
    GET_COUNTRIES_BY_NAME,
    GET_ACTIVITIES,
    POST_ACTIVITIES,
    DELETE_ACTIVITY,
    FILTERED_BY_ACTIVITIES,
    FILTERED_BY_CONTINENT,
    ORDERED_BY_NAME,
    ORDERED_BY_POPULATION,
    CLEAN,
} from './types';

const initialState = {
    countries: [],
    allCountries: [],
    countriesDetail: [],
    activities: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };

        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: action.payload,
            }

        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                countriesDetail: action.payload,
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                allActivities: action.payload
            };

        case POST_ACTIVITIES:
            return {
                ...state,
            };

        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.filter((a) => a.id !== action.payload)
            };

        case FILTERED_BY_ACTIVITIES:
            const allCountries = state.allCountries
            const filteredbyActivity = action.payload === 'All'
            ? allCountries : allCountries.filter((c) => {
                    const activities = c.activities.map((a) => a.name)
                    return activities.includes(action.payload)

                    });
            return {
                ...state,
                countries: filteredbyActivity
            };

        case FILTERED_BY_CONTINENT:
            const countriesByContinent = state.allCountries
            const filteredbyContinent = action.payload !== 'All' ?
                countriesByContinent.filter(c => c.continents.includes(action.payload)) : countriesByContinent;
            console.log(state.allCountries)
            console.log(filteredbyContinent)
            return {
                ...state,
                countries: filteredbyContinent
            };

        case ORDERED_BY_NAME:
            const sorted = state.allCountries
            const isAscending = action.payload === "asc";
            const sortedCountries = sorted.sort((a, b) =>
                isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            );
            return {
                ...state,
                countries: sortedCountries
            }

        case ORDERED_BY_POPULATION:
            const countriesPop = state.allCountries;
            console.log(countriesPop)
            const isAscending2 = action.payload === 'asc';
            const sortedByPopulation = countriesPop.sort((a, b) => {
                return isAscending2 ? b.population - a.population : a.population - b.population;
            });

            return {
                ...state,
                countries: sortedByPopulation
            };

        case CLEAN:
            return {
                ...state,
                countries: state.allCountries
            };

        default:
            return { ...state }

        //me falta el estado para: 
        // 1) paginación
        // 2) add y rmeove favorite?




    }
}
export default rootReducer;