export interface FacultyInterface {
    ID: number;
    FacultyName: string;
    FacultyPhone?: string;
    FacultyEmail?: string;
}

export interface FacultyResponse {
    data: FacultyInterface[];
    totalCount: number;
}