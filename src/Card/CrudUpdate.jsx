

const CrudUpdate = () => {
    const url = 'https://users-crud.academlo.tech/'
    const [, , , , updateApi] = useCrud(url);
    const [open,setOpen] = useState(false);


    return(
        <>

        <button onClick={() => setOpen(!open)}></button>
        {
            
        }
        </>
    )
}
export default CrudUpdate;