import axios from "axios";
import { LecturerInterface } from "../../interfaces/Lecturer";
import { PrintStoryInterface } from "../../interfaces/PrintStory";
import { RequestInterface } from "../../interfaces/Request";

const apiUrl = "http://localhost:8000";
const Authorization = localStorage.getItem("token");
const Bearer = localStorage.getItem("token_type");

const requestOptions = {

    headers: {
  
      "Content-Type": "application/json",
  
      Authorization: `${Bearer} ${Authorization}`,
  
    },
  
  };

async function GetFaculty() {
    return await axios
        .get(`${apiUrl}/faculty`)
        .then((res) => res)
        .catch((e) => e.response);
}

async function GetMajorByFacultyID(id: number) {
    return await axios
        .get(`${apiUrl}/majorbyfacultyid/${id}`)
        .then((res) => res)
        .catch((e) => e.response);
}

async function CreateLecturers(data: LecturerInterface) {
    return await axios
      .post(`${apiUrl}/lecturer`, data)
      .then((res) => res)
      .catch((e) => e.response);
  }

async function GetGenders() {
    return await axios
        .get(`${apiUrl}/gender`)
        .then((res) => res)
        .catch((e) => e.response);
}

async function GetLecturerByMajorID(id: number) {
    return await axios
        .get(`${apiUrl}/lecturerbymajorid/${id}`)
        .then((res) => res)
        .catch((e) => e.response);
}

async function GetDegrees() {
    return await axios
        .get(`${apiUrl}/degree`)
        .then((res) => res)
        .catch((e) => e.response);
}

async function GetPositions() {
    return await axios
        .get(`${apiUrl}/position`)
        .then((res) => res)
        .catch((e) => e.response);
}

async function GetStatusStaffs() {
    return await axios
        .get(`${apiUrl}/statusstaff`)
        .then((res) => res)
        .catch((e) => e.response);
}


async function GetDegree() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const res = await fetch(`${apiUrl}/degree`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return false;
        }
      });
  
    return res;
  }





//Request  Jiw

async function CreateRequest(data: RequestInterface) {

  return await axios

    .post(`${apiUrl}/createrequest`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}

export async function GetRequestsByStudentID(studentID: number) {
  return await axios
    .get(`${apiUrl}/request/${studentID}`, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}

async function GetRequestTypes() {
  return await axios
      .get(`${apiUrl}/requesttype`)
      .then((res) => res)
      .catch((e) => e.response);
}

async function GetStatusRequest() {
  return await axios
      .get(`${apiUrl}/statusRequest`)
      .then((res) => res)
      .catch((e) => e.response);
}


async function GeneratePDF(data: PrintStoryInterface) {

    return await axios
  
      .post(`${apiUrl}/printstory`, data, requestOptions)
  
      .then((res) => res)
  
      .catch((e) => e.response);
  
  }


  async function GetPrintStory() {

    return await axios
  
      .get(`${apiUrl}/printstory`, requestOptions)
  
      .then((res) => res)
  
      .catch((e) => e.response);
  
  }

export {
    GetFaculty,
    GetMajorByFacultyID,
    CreateLecturers,
    GetGenders,
    GetLecturerByMajorID,
    GetDegrees,
    GetPositions,
    GetStatusStaffs,
    GetDegree,

    //Request  JIW
    GeneratePDF,
    CreateRequest,
    GetRequestTypes,
    GetStatusRequest,
    GetPrintStory,
};
