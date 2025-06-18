import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "./config/firebase.js";

const API_URL = 'https://dummyjson.com/products';



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export async function getAllProducts() {
//     return await axios.get(`${API_URL}`);
// };

// export async function getAllCategories() {
//     return await axios.get(`${API_URL}/categories`);
// };

// export async function getProductById(id) {
//     return await axios.get(`${API_URL}/${id}`);
// };

// export async function getProductsByCategory(category) {
//     return await axios.get(`${API_URL}/category/${category}`);
// };

