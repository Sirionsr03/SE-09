export interface LecturerInterface {
    ID?: number;
    LecturerCode?: string;
    FirstName?: string;
    LastName?: string;
    BirthDay?: number;
    Email?: string;
    Password?: string;
    DateEmployed?: string;
    GenderID?: number;
    Profile?: string;
    Phone?: string;
    PositionID?: number;
    MajorID?: number;
    StatusStaffID?: number;
  }

  export interface LecturerResponse {
      data: LecturerInterface[];
      totalCount: number;
  }