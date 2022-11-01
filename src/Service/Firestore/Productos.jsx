import { getDocs, collection, query, where } from 'firebase/firestore'
import {getDoc, doc} from 'firebase/firestore'
import { dataBase } from '../../Service/Firebase'
import { createAdaptedProductFromFirestore } from '../../Adapter/Adaptedproduct'



    export const getProducts = (categoryId) => {
        return new Promise((resolve, reject) => {
                const collectionRef = categoryId 
                ? query(collection(dataBase, 'products'), where('category', '==', categoryId))
                : collection(dataBase, 'products')
    
            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc => {
                        return createAdaptedProductFromFirestore(doc)
                    })
                    resolve(productsAdapted)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }


    export const getProduct = (productId) => {
        return new Promise ((resolve,reject) =>{
            const docRef = doc(dataBase, 'products', productId)

            getDoc(docRef)
            .then(response => {
    
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                resolve(productAdapted)
            })

                .catch(error => {
                    reject(error)
                })

        })
    }