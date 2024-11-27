import axios from "axios";

export default async function getProjects() {
// service to access my api on render.com
  const response = await axios.get('http://127.0.0.1:8000/api/projects')
  // const response = await axios.get('https://backend-portfolio-f380.onrender.com/api/projects')

  return response.data
}
