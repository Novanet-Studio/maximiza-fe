import { getHomeQuery } from "~/schemas/homme.schemas";

export const useMaximizaQueries = () => {
    const graphql = useStrapiGraphQL();
    const homeData = ref<any>(null);
    const loading = ref(false);

    const fetchHome = async () => {
        loading.value = true;

        try {
            const response = await graphql<any>(getHomeQuery);

            homeData.value = response?.data?.home || null;
        } catch (error) {
            console.error("Error fetching home:", error);
            homeData.value = null;
        } finally {
            loading.value = false;
        }
    };

    return {
        homeData,
        loading,
        fetchHome,
    };
};
