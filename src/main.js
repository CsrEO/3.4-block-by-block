import * as weatherlib from '@cicciosgamino/openweather-apis';
import input from "input"
const key = '3aad45db1823692854e69062c76be1ad';

async function getClient(zipCode) {
  const client = await (new weatherlib.AsyncWeather());
  client.setLang('en');
  client.setApiKey(key);
  client.setZipCodeAndCountryCode(zipCode, 'US');
  return client;
}



const client = await getClient(64081);
const raining = await client.getDescription();
const userInput = await input.text("what is your weather like");

console.log("it's cloudy and raining");

