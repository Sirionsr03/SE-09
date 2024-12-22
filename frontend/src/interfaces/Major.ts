export interface MajorInterface {
    ID: number;
    MajorName: string;
    MajorPhone?: string;
    MajorEmail?: string;
    FacultyID: number;
}

export interface MajorResponse {
    data: MajorInterface[];
    totalCount: number;
}