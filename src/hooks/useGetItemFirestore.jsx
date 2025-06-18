import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/config/firebase';

/**
 * Hook para obtener un item de una colección de Firestore
 * @param {string} id - El ID del item a obtener
 * @param {string} collectionName - El nombre de la colección en la que se encuentra el item
 * @returns {Object} { item, isLoading } - Un objeto con el item y un estado de carga
 */

export const useGetItemFirestore = (id, collectionName) => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const itemCol = doc(db, collectionName, id);
        getDoc(itemCol).then((snapshot) => {
            const item = snapshot.data();
            setItem(item);
            setIsLoading(false);
        });
    }, [id, collectionName]);

    return { item, isLoading };
};