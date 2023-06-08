export { getNames };
import 'dotenv/config';


async function getNames() {
    const listOfNames = await fetch('https://randommer.io/api/Name?nameType=firstname&quantity=5000', {
        headers: {
            'X-Api-Key': process.env.API_KEY
        }
    });
    return listOfNames;
}




