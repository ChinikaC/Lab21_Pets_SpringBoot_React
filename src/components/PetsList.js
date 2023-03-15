import Pets from "./Pets"

const PetsList = ({pets}) => {

    const petsComponents = pets.map(pets => {
        return <Pets
        key={pets.id}
        pets={pets}
        />
    });

    return(
        <div id="pets-list">
            {petsComponents}
        </div>
    )

}

export default PetsList;