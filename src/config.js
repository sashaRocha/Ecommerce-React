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
   const refInfo = collection(DB,'Items');

  const q = query(refInfo, where('categoryId','==',categoryId))
    
  const querySnapshot = await getDocs(q);
  const infoFromFirestore = querySnapshot.docs.map(document => ({
             
             ...document.data()
   }));
   return infoFromFirestore; 
 
  }


// export const getProductById =  (id) => {
  // const detailRef = doc(DB,'Items','Ce5lVHNGxIRBOl9tTA8B'); 
  // const docSnap = await getDoc(detailRef);

  // if(docSnap.exists()){

  //   docSnap.data();
  // }else{
  //   console.log('error');
  // }
 
  // const detailRef = collection(DB,'Items');
  // const q = query(detailRef, where('ID','==','Ce5lVHNGxIRBOl9tTA8B'))
  // const querySnapshot = await getDocs(q);

  // const detailFromFirestore = querySnapshot.docs.find(prod => (prod.id === id))
  // return detailFromFirestore;

        
  //   return new Promise((resolve, reject) => {
  //     const detailRef = doc(DB,'Items','Ce5lVHNGxIRBOl9tTA8B'); 
  
  //     getDoc(detailRef).then((snapshot) => {
  //       const detailProduct = snapshot.doc.map((rawDoc) => {
  //         return{
            
  //               ...rawDoc.data()
  //         }
  //       });
  //       resolve(detailProduct);
       
  //     })
  //   })
  // }