import { getDatabase, ref, child, get, set, query } from "firebase/database";

// Endpoint to get a specific path from the database
/**
 * 
 * @param {*} fb 
 * @param {*} pathName 
 */
export const getPath = async (fb, req, res) => {
    // Generate a database reference
    const db = getDatabase(fb);
    const dbRef = ref(db);

    // Extract the path name from the url
    const pathName = req.params['pathName'];

    get(child(dbRef, `paths/${pathName}`)).then((snapshot) => {
        if (snapshot.exists()) {
            res.status(200).json(snapshot.val());
        } else {
          res.status(404).json("No data available");
        }
      }).catch((error) => {
        // console.error(error);
        res.status(500).json("Something went wrong");
      });
};

// Endpoint to add a new path to the database
export const addPath = async (fb, req, res) => {
    const db = getDatabase(fb);

    // Assume that pathDetails is a JSON object in the form seen on firebase.
    set(ref(db, "paths/" + req.body.pathName), req.body.pathDetails);
}
