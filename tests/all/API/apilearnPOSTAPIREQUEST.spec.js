import {expect, test} from "@playwright/test"
import postrequestdat from "./apiPostdata.json"
import putdata from "./apiPut.json"
import authentication from "./authentication.json"
import patchData from "./apiPatch.json"

///https://restful-booker.herokuapp.com/
test("api ",async ({request}) => {


    //generate token
let authenticationResponse=await request.post("/auth",{ data:authentication})
let authenticationBody=await authenticationResponse.json()
console.log(authenticationResponse);

const tokenID=authenticationBody.token;


//create book
    const start=Date.now()
   const response= await request.post("/booking",{data:postrequestdat})
const end=Date.now()
console.log(`response:${end-start} ms`);

expect(end-start).toBeLessThan(2000)
let responseBody=await response.json()
console.log(responseBody);

await expect(response.ok()).toBeTruthy()
await expect(response.status()).toBe(200)
await expect(responseBody.booking.firstname).toBe("srushti")
await expect(responseBody.booking.additionalneeds).toBe("Breakfast")

let id=responseBody.bookingid

console.log(id);


//get
// let getresponse=await request.get(`/booking/${id}`)
// let getreponsebody=await getresponse.json()
// console.log(getreponsebody);
// await expect(getresponse.ok()).toBeTruthy()
// await expect(getresponse.status()).toBe(200)



///put
let putResponse=await request.put(`/booking/${id}`,{
    headers: {
   'Cookie': `token=${tokenID}`,
   'Content-Type': 'application/json' ,
   'Accept': 'application/json'
},data:putdata})
console.log(putResponse.status());

let responsePatchBodyputreponseBody=await putResponse.json()
console.log(responsePatchBodyputreponseBody);


await expect(responsePatchBodyputreponseBody.firstname).toBe("srushtiiiiiiiiiii");
await expect(putResponse.ok()).toBeTruthy()

await expect(putResponse.status()).toBe(200);



//patch

let responsePatch=await request.patch(`/booking/${id}`,{
    headers:{
    'Content-Type': 'application/json' ,
    'Accept': 'application/json' ,
   'Cookie': `token=${tokenID}` 
},data:patchData})


let responsePatchBody=await responsePatch.json()

console.log("patchbody",responsePatchBody);



await expect(responsePatchBody.firstname).toBe("Fantastic");
await expect(responsePatchBody.lastname).toBe("Superb Srushti");
await expect(responsePatch.ok()).toBeTruthy()

await expect(responsePatch.status()).toBe(200);


//delete
let deletestatment=await request.delete(`/booking/${id}`,
    {
    headers:{
        'Content-Type': 'application/json' ,
     'Cookie': `token=${tokenID}`,
    }
})


// await expect(deletestatment).toBeTruthy()

await expect(deletestatment.status()).toBe(201);




    
})