import { DB  } from "./api/APIFirebase"
import {getDocs,collection, query, where} from 'firebase/firestore';


export const getProducts = () => {
return new Promise((resolve, reject) => {
  const colRef = collection(DB,'Items')
    getDocs(colRef).then((snapshot) =>{
        const productosConFormato = snapshot.docs.map((rawDoc) => {
          return{
            id:rawDoc.id,
            ...rawDoc.data()
          }
        });
        resolve(productosConFormato)
          
    },(error) =>{
      reject('>> error al traer los datos');
    })
})}


export const getProductsByCategory = async (categoryId) => {
   const refInfo = collection(DB,'Items');

  const q = query(refInfo, where('categoryId','==',categoryId))
    
  const querySnapshot = await getDocs(q);
  const infoFromFirestore = querySnapshot.docs.map(document => ({
             
             ...document.data()
   }));
   return infoFromFirestore; 
 
  }


