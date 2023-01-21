import { getDatabase, ref, set, query } from "firebase/database";

function writeUserData(fb, userId, name, email, imageUrl) {
    const db = getDatabase(fb);
    set(ref(db, "users/" + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

export default writeUserData;