import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";

export const ViewGuestDemo = () => {
    const { id } = useParams();
    const [guestList, setGuestList]  = useState([]);

    const guestsCollectionRef = query(
        collection(db, "guests"),
        where("product_id", + "==", "6n6cVNI2VGRMQ3Yc8t7a")
    );

    const getGuestList  = async () => {
        try {
            // const data = await getDocs(guestsCollectionRef);
            // console.log(guestsCollectionRef);

            const filteredData = guestsCollectionRef.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setGuestList(filteredData);
            console.log(filteredData);
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getGuestList();
    }, []);

    return (
        <React.Fragment>
            HELLO
        </React.Fragment>
    )
};