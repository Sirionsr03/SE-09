export interface MajorInterface {
    ID: number;
    major_name: string;
    MajorPhone?: string;
    MajorEmail?: string;
    FacultyID: number;
}

export interface MajorResponse {
    data: MajorInterface[];
    totalCount: number;
}