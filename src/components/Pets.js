const Pets = ({pets, onDelete}) => {

    const handleDeleteClick = () => {
        onDelete(pets.id);
    }

   
    return(
        <div className="pets">
            <h4><u>{pets.name}</u></h4>
            <p><b>Name:</b> {pets.name}</p>
            <p><b>Type:</b> {pets.type}</p>
            <p><b>Breed:</b> {pets.breed}</p>
            <p><b>Age:</b> {pets.age}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>  
    )

}

export default Pets;