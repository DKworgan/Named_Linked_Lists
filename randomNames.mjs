export { arr };
import 'dotenv/config';


let arr = [];
async function getNames() {
    const listOfNames = await fetch('https://randommer.io/api/Name?nameType=firstname&quantity=5000', {
        headers: { 'X-Api-Key': process.env.API_KEY }
    });
    return listOfNames;


}

getNames().then((response) => {
    return response.json();

})
    .then(
        (result) => {
            for (let i = 0; i < result.length; i++) {
                arr.push(result[i]);
            }
        }
    );
//console.log(process.env.API_KEY);
