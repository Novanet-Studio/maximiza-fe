declare module "@/assets/data/common.json" {
    const value: {
        email: string;
        phone: string;
        fax: string;
        address: string;
    };

    export default value;
}

declare namespace MXMZ {
    export interface Response<T> {
        data: T
    }

    export interface Balance {
        readonly documentId: string;
        readonly label: string;
        readonly items: BalanceItem[];
    }

    export interface BalanceItem {
        readonly ano: number;
        readonly source: BalanceSource[];
    }

    export interface BalanceSource {
        readonly label: string;
        readonly file: File;
    }

    export interface File {
        readonly url: string;
    }

    export interface Article {
        readonly documentId: string;
        readonly titulo: string;
        readonly fecha: Date;
        readonly slug: string;
        readonly descripcion: string;
        readonly imagen: {
            readonly url: string;
            readonly alternativeText: string;
        };
    }


}
