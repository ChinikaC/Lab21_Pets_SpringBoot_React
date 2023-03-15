const Pets = ({pets, onDelete}) => {

    const handleDeleteClick = () => {
        onDelete(pets.id);
    }

   
    return(
        <div className="pets">
            <h4>{pets.name}</h4>
            <p>Name: {pets.name}</p>
            <p>Type: {pets.type}</p>
            <p>Breed: {pets.breed}</p>
            <p>Age: {pets.age}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>  
    )

}

export default Pets;