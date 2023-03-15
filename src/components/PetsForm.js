import {useState} from "react"

const PetsForm = ({pets}) => {
    
    const [newPets, setNewPets] = useState({
        name: "",
        age: 0,
        type: null,
        breed: null
    })

    const petsOptions = pets.map(pets => {
        return <option value={pets.id} key={pets.id}>
            {pets.age.name}
        </option>
    })

    return(
        <form id="pets-form">
            <h3>Add a new Pet!</h3>
            <label htmlFor="pets-name">Pet Name:</label>
            <input 
            id="pets-name"
            name="name"
            type="text"
             />

            </form>
    )


}


export default PetsForm;
