import { BASE_URL } from './constants';

export const makeGetReques = async (url: any) => {
  try {
    const response = await fetch(`${url}`);
    const result = await response.json();
    return result;
  } catch (error) {
    alert(`Something went wrong (${error})`);
    return error;
  }
};

// export const makePostReques = async (url: any, finalData: any) => {
//   try {
//     console.log(finalData, 'finalDatafinalData');
//     const response = await fetch(`${url}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(finalData),
//     });

//     if (!response.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error(response.);
//     }

//     return response.json();
//   } catch (error) {
//     alert(`Something went wrong (${error})`);
//     return error;
//   }
// };

// export const makePutReques = async (url: any, finalData: any) => {
//   try {
//     const response = await fetch(`${url}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(finalData),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     alert(`Something went wrong (${error})`);
//     return error;
//   }
// };
