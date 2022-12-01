import axios from "axios"

export const get = async (url) => {
  let data = [];
  await axios.get(url)
    .then( response => data = response.data)
    .catch(err => console.log(err));
  return data
}