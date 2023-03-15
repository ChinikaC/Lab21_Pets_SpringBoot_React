import Pets from "./Pets"

const PetsList = ({pets, onDelete}) => {

    const petsComponents = pets.map(pets => {
        return <Pets
        key={pets.id}
        pets={pets}
        onDelete={onDelete}
        />
    });

    return(
        <div id="pets-list">
            {petsComponents}
        </div>
    )

}

export default PetsList;