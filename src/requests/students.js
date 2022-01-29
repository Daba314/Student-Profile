//contain url to json Api
import axios from 'axios';

const BASE_URL = 'https://api.hatchways.io';

export const getStudents = async () => await axios.get(`${BASE_URL}/assessment/students`);