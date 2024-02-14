import { useEffect, useState } from "react";
import useCrud from "../Components/useCrud";
import "./style/CrudGet.css"; // Importar el archivo CSS

const CrudGet = () => {
    const url = 'https://users-crud.academlo.tech/';
    const [users, getApi, , deleteApi, updateApi] = useCrud(url);
    const [openUserId, setOpenUserId] = useState(null); // Estado para almacenar el ID del usuario cuyo formulario está abierto
    const [updatedUserData, setUpdatedUserData] = useState(null);
    
    useEffect(() => {
        getApi('users');
    }, []);

    const handleUpdate = (userId) => {
        setOpenUserId(userId); // Abrir el formulario para el usuario seleccionado
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = () => {
        if (updatedUserData && openUserId) {
            updateApi('/users', openUserId, updatedUserData);
            setOpenUserId(null); // Cerrar el formulario después de la actualización
        }
    };

    return (
        <div className="crud-container">
            {users?.map(user => (
                <div key={user.id} className="user-card">
                    <h2>{user.first_name} {user.last_name}</h2>
                    <span>CORREO</span>
                    <p>{user.email}</p>
                    <span>CUMPLEAÑOS</span>
                    <p>{user.birthday}</p>
                    <button onClick={() => deleteApi('/users', user.id)}>Borrar</button>
                    <button onClick={() => handleUpdate(user.id)}>Update</button>
                    
                    {openUserId === user.id && ( // Mostrar el formulario solo para el usuario seleccionado
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Actualizar Usuario</h2>
                                <label htmlFor="email">Nuevo email:</label>
                                <input id="email" type="email" name="email" onChange={handleChange} />
                                <label htmlFor="first_name">Nuevo first name:</label>
                                <input id="first_name" type="text" name="first_name" onChange={handleChange} />
                                <label htmlFor="last_name">Nuevo last name:</label>
                                <input id="last_name" type="text" name="last_name" onChange={handleChange} />
                                <label htmlFor="birthday">Nueva fecha de nacimiento:</label>
                                <input id="birthday" type="date" name="birthday" onChange={handleChange} />
                                <button onClick={handleFormSubmit}>Actualizar</button>
                                <button onClick={() => setOpenUserId(null)}>Cerrar</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CrudGet;
