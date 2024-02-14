import axios from "axios";
import {useState} from "react"; 

const useCrud = (urlBase) => {
    const [apiData,setApiData]= useState([]);

    //Read
    const getApi = (path) => {
        axios.get(`${urlBase}${path}`)
            .then(resp => {
                setApiData(resp.data)
            })
            .catch(error => console.log(error));
    }

    //Create
    const postApi = (path, data) => {
        axios.post(`${urlBase}${path}/`, data) // Concatena el urlBase y el path
            .then(resp => {
                setApiData([...apiData, resp.data]);
                console.log(resp.data)
            })
            .catch(error => console.log(error));
    };

    //delete
    const deleteApi = (path,id) => {
        axios.delete(`${urlBase}${path}/${id}/`)
            .then(() => {
                setApiData(apiData.filter(element => element.id!==id))
            })
            .catch(error => console.log(error))
    }

    //update
    const updateApi = (path,id,data) => {
        axios.patch(`${urlBase}${path}/${id}/`, data)
            .then(resp => {
                setApiData(apiData.map(element => element.id===id? resp.data : element));
            })
            .catch(error => console.log(error));
    }

    return [apiData, getApi, postApi, deleteApi, updateApi];
}

export default useCrud