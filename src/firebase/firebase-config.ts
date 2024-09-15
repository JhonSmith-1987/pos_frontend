import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBs6ZBpSSEmBEVqqBrbiFxUOG6NGCfP9Gc",
    authDomain: "storage-pos-fd0cf.firebaseapp.com",
    projectId: "storage-pos-fd0cf",
    storageBucket: "storage-pos-fd0cf.appspot.com",
    messagingSenderId: "211116239544",
    appId: "1:211116239544:web:f906e9051bcc1d12dbe24d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file:File, nameFile:string) {
    const storageRef = ref(storage, nameFile);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
}

export async function DeleteFIle(nameFile:string) {
    const desertRef = ref(storage, nameFile);
    // Delete the file
    deleteObject(desertRef).then(() => {
        // File deleted successfully
        console.log('se ha eliminado correctamente');
    }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error, 'ha ocurrido un error');
    });
}