import { getHomeQuery } from "~/schemas/homme.schemas";
import { getEmpresaQuery } from "~/schemas/empresa.schema";
import { getCapitalQuery } from "~/schemas/capital.schema";
import { getContactoQuery } from "~/schemas/contacto.schemas";
import { getCumplimientoQuery } from "~/schemas/cumplimiento.schemas";
import { getDirectivaQuery } from "~/schemas/directiva.schemas";
import { getEducacionQuery } from "~/schemas/educacion.schemas";
import { getMediosQuery } from "~/schemas/medios.schemas";
import { getResponsabilidadQuery } from "~/schemas/responsabilidad.schemas";
import { getServiciosQuery } from "~/schemas/servicios.schemas";
import { getSugerenciasQuery } from "~/schemas/sugerencias.schemas";

export const useMaximizaQueries = () => {
    const graphql = useStrapiGraphQL();

    const loading = ref(false);

    // Home
    const homeData = ref<any>(null);
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

    // Empresa
    const empresaData = ref<any>(null);
    const fetchEmpresa = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getEmpresaQuery);
            empresaData.value = response?.data?.empresa || null;
        } catch (error) {
            console.error("Error fetching empresa:", error);
            empresaData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Capital
    const capitalData = ref<any>(null);
    const fetchCapital = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getCapitalQuery);
            capitalData.value = response?.data?.capital || null;
        } catch (error) {
            console.error("Error fetching capital:", error);
            capitalData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Contacto
    const contactoData = ref<any>(null);
    const fetchContacto = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getContactoQuery);
            contactoData.value = response?.data?.contacto || null;
        } catch (error) {
            console.error("Error fetching contacto:", error);
            contactoData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Cumplimiento (Legal)
    const legalData = ref<any>(null);
    const fetchCumplimiento = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getCumplimientoQuery);
            legalData.value = response?.data?.legal || null;
        } catch (error) {
            console.error("Error fetching cumplimiento:", error);
            legalData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Directiva
    const directivaData = ref<any>(null);
    const fetchDirectiva = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getDirectivaQuery);
            directivaData.value = response?.data?.directiva || null;
        } catch (error) {
            console.error("Error fetching directiva:", error);
            directivaData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Educacion
    const educacionData = ref<any>(null);
    const fetchEducacion = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getEducacionQuery);
            educacionData.value = response?.data?.educacion || null;
        } catch (error) {
            console.error("Error fetching educacion:", error);
            educacionData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Medios
    const mediosData = ref<any>(null);
    const fetchMedios = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getMediosQuery);
            mediosData.value = response?.data?.medio || null;
        } catch (error) {
            console.error("Error fetching medios:", error);
            mediosData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Responsabilidad
    const responsabilidadData = ref<any>(null);
    const fetchResponsabilidad = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getResponsabilidadQuery);
            responsabilidadData.value = response?.data?.responsabilidad || null;
        } catch (error) {
            console.error("Error fetching responsabilidad:", error);
            responsabilidadData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Servicios
    const serviciosData = ref<any>(null);
    const fetchServicios = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getServiciosQuery);
            serviciosData.value = response?.data?.servicio || null;
        } catch (error) {
            console.error("Error fetching servicios:", error);
            serviciosData.value = null;
        } finally {
            loading.value = false;
        }
    };

    // Sugerencias
    const sugerenciaData = ref<any>(null);
    const fetchSugerencias = async () => {
        loading.value = true;
        try {
            const response = await graphql<any>(getSugerenciasQuery);
            sugerenciaData.value = response?.data?.sugerencia || null;
        } catch (error) {
            console.error("Error fetching sugerencias:", error);
            sugerenciaData.value = null;
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        // Home
        homeData,
        fetchHome,
        // Empresa
        empresaData,
        fetchEmpresa,
        // Capital
        capitalData,
        fetchCapital,
        // Contacto
        contactoData,
        fetchContacto,
        // Cumplimiento
        legalData,
        fetchCumplimiento,
        // Directiva
        directivaData,
        fetchDirectiva,
        // Educacion
        educacionData,
        fetchEducacion,
        // Medios
        mediosData,
        fetchMedios,
        // Responsabilidad
        responsabilidadData,
        fetchResponsabilidad,
        // Servicios
        serviciosData,
        fetchServicios,
        // Sugerencias
        sugerenciaData,
        fetchSugerencias,
    };
};
