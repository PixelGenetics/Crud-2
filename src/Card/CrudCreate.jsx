import { useForm } from "react-hook-form";
import useCrud from "../Components/useCrud";
import { useState } from "react";
import "./style/CrudCreate.css"; // Archivo CSS para estilos personalizados

const CrudCreate = () => {
    const url = 'https://users-crud.academlo.tech/';
    const [, , createUsers] = useCrud(url);
    const { register, handleSubmit, reset } = useForm();
    const [open, setOpen] = useState(false);

    const onSubmit = (data) => {
        createUsers('/users', data);
        reset();
        setOpen(false); // Cerrar el formulario después de enviarlo
    };

    return (
        <>
            <button className="open-button" onClick={() => setOpen(true)}>Abrir Formulario</button>

            {open && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-button" onClick={() => setOpen(false)}>Cerrar</button>
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <h3>Email</h3>
                            <input type="email" {...register("email")} />
                            <h3>Password</h3>
                            <input type="password" {...register("password")} />
                            <h3>First Name</h3>
                            <input {...register("first_name")} type="text"/>
                            <h3>Last Name</h3>
                            <input {...register("last_name")} type="text"/>
                            <h3>Birthday</h3>
                            <input type="date" {...register("birthday")} />
                            <h3>Image URL</h3>
                            <input type="text" {...register("image_url")} />
                            <button type="submit">Submit</button>
                            <button onClick={() => setOpen(false)} type="close">Close</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CrudCreate;
