import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {

    const [lista, setLista] = useState([])

    const GetList = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
        .then((value) => {
            setLista(value.data.meals)

    });
};

    useEffect(() =>{
        GetList();
    })

    return (
        <div>
            <ul>
                {lista.map( (item) => {return <li key={item.idMeal}> {item.strMeal}</li>})}
            </ul>
        </div>
    );
}

export default Axios;