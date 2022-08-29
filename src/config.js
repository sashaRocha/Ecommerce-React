import { DB  } from "./api/APIFirebase"
import {getDocs,collection, query, where} from 'firebase/firestore';


export const getProducts = () => {
return new Promise((resolve, reject) => {
  const colRef = collection(DB,'Items')
    getDocs(colRef).then((snapshot) =>{
        const productosConFormato = snapshot.docs.map((rawDoc) => {
          return{
            id: rawDoc.id,
            ...rawDoc.data()
          }
        });
        console.log('>>Productos',productosConFormato);
        resolve(productosConFormato)
          
    },(error) =>{
      reject('>> error al traer los datos');
    })
})}


export const getProductsByCategory = async (categoryId) => {
   
    const q = query(collection(DB,'Items'),where('category','==',categoryId))
   
   const querySnapshot = await getDocs(q);
   const infoFromFirestore = querySnapshot.docs.map(document => ({
             id: document.id,
             ...document.data()
   }));
   return infoFromFirestore;
  }


export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      const q = query(collection(DB,'Items'), where('category','==',id))
      getDocs(q).then((snapshot) => {
        if(snapshot === 0){
          console.log('no results');
        }
        resolve(q);
      })
    })
  }