import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/config/firebase';

/**
 * Hook para obtener todos los items de una colección de Firestore
 * @param {string} collectionName - El nombre de la colección en la que se encuentran los items
 * @returns {Object} { items, isLoading } - Un objeto con los items y un estado de carga
 */

export const useGetFirestoreDocs = (collectionName) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const itemsCol = collection(db, collectionName);
        getDocs(itemsCol)
        .then((snapshot) => {
            const items = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setItems(items);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error al obtener los items:", error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [collectionName]);

    return { items, isLoading };
};