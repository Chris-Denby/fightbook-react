import { getDatabase, ref, onValue } from "firebase/database"

const getPostWrapper = ({ children }) => {

    //INSERT SHARED LOGIN IN THIS FUNCITON
    
    const database = getDatabase();
    const postsRef = ref(database, 'path to data')
    const [posts, setPosts] = useState([]);

    //on value change listener recieves a snapshot that contains
    //the data at the specified location in the database
    //at the time of the event
    //data can be retrieved from the snapshot with val()
    onValue(postsRef, (snapshot) => {
        const currentData = snapshot.val();
        //DO SOMETHING WITH THE DATA
        setPosts(currentData)
    })

    //RETURN THE COMPONENT BEING WRAPPED
    return(
        {children}
    )
}


