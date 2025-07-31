import {test,expect} from '@playwright/test';
test('API Get Request', async({request})=>{
    const response= await request.get("https://reqres.in/api/users/2");
    expect(response.status()).toBe(200);
    const text=await response.text();
    expect(text).toContain("Janet");
    console.log(await response.json());
})

// test('API Post Request', async({request})=>{
//     const response= await request.post("https://reqres.in/api/users",
//         {
//             data: {"name": "Sudha", "job": "SDET"},
//             // headers: {"Accept":"application/json"}
//     });
//     expect(response.status()).toBe(201);
//     const payload=await response.json();
//     expect(payload.name).toBe("Sudha");
//     expect(payload.job).toBe("SDET")
//     console.log(payload);

// })


// // import { test, expect } from '@playwright/test';

// // test('Create user on ReqRes (public API)', async ({ request }) => {
// //   const response = await request.post('https://reqres.in/api/users', {
// //     data: { name: 'Sudha', job: 'Senior SDET' }
// //   });
// //   expect(response.status()).toBe(401);
// //   const payload = await response.json();
// //   expect(payload.name).toBe('Sudha');
// //   expect(payload.job).toBe('Senior SDET');
// //   console.log(payload);
// // });
// import { test, expect } from '@playwright/test';

// test('Create user on Reqres via POST', async ({ request }) => {
//   // Call the API
//   const response = await request.post('https://reqres.in/api/users', {
//     data: { name: 'Sudha', job: 'Senior SDET' }
//   });

//   // Validate status code
//   expect(response.status()).toBe(201);

//   // Parse and validate returned JSON
//   const body = await response.json();
//   expect(body.name).toBe('Sudha');
//   expect(body.job).toBe('Senior SDET');
//   expect(body.id).toBeDefined();
//   expect(body.createdAt).toBeDefined();

//   // Log for assessment
//   console.log('Response payload:', body);
// });
