import {onValue, ref, set} from "firebase/database";
import database from "../firebase"

class DataService {
    getAll() {
        const starCountRef = ref(database, 'Proyecto/' );
        return new Promise((resolve)=>{
            onValue(starCountRef, (snapshot) => {
                resolve(snapshot.val())
            });
        })
    }

    update(key, value) {
        console.log(key,value)
        set(ref(database, 'Proyecto/' + key.Nombre), {
            Estado:value,
            Nombre:key.Nombre,
            id:key.id,
        });

    }

}
export default new DataService();