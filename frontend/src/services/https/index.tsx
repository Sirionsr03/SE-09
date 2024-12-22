import axios from "axios";
import { PrintStoryInterface } from "../../interfaces/PrintStory";
// import { LecturerInterface } from "../../interfaces/Lecturer";

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

// async function CreateLecturer(data: LecturerInterface) {
//     const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//     };

//     let res = await fetch(`${apiUrl}/lecturer`, requestOptions)
//         .then((res) => {
//             if (res.status == 201) {
//                 return res.json();
//             } else {
//                 return false;
//             }
//         });

//     return res;
// }

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




//Request  Jiw
async function GeneratePDF(data: PrintStoryInterface) {

    return await axios
  
      .post(`${apiUrl}/printstory`, data, requestOptions)
  
      .then((res) => res)
  
      .catch((e) => e.response);
  
  }

export {
    GetFaculty,
    GetMajorByFacultyID,
    // CreateLecturer,
    GetGenders,
    GetLecturerByMajorID,
    GetDegrees,

    

    //Request  Jiw
    GeneratePDF
};