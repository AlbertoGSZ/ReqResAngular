
    export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface ResponseUser {
        data: User
    }

    export interface ResponseUsers {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
    }

    export interface RequestCreate {
        name: string;
        surname: string;
        email: string;
        avatar: string;
    }

    export interface ResponseCreate {
        name: string;
        job: string;
        id: string;
        createdAt: Date;
    }

    export interface RequestID {
        id: number
    }
