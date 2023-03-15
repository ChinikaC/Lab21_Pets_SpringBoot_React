import {useState} from "react"

const PetsForm = ({pets, onSubmit}) => {
    
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

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedPet = {...newPets};
        copiedPet[propertyName] = event.target.value;
        setNewPets(copiedPet);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(newPets);
    }

    return(
        <form id="pets-form" onSubmit={handleFormSubmit}>
            <h3>Add a New Pet Below:
            </h3>

            <label htmlFor="pet-name">Pet Name:</label>
            <input 
            id="pet-name"
            name="name"
            type="text"
            placeholder="Enter Pet Name"
            onChange={handleChange}
             />
             
             <label htmlFor="pet-age">Pet Age (in years):</label>
             <input
                id="pet-age"
                name="age"
                type="number"
                min={0}
                max={100}
                onChange={handleChange}
            />

            <label htmlFor="pet-type">Pet Type:</label>
            <input 
                id="pet-type" 
                name="type"
                type="text"
                placeholder="Enter Pet Type"
                onChange={handleChange}
            />
            
            <label htmlFor="pet-breed">Pet Breed:</label>
            <input
                id="pet-breed" 
                name="breed"
                type="text"
                placeholder="Enter Pet Breed"
                onChange={handleChange}
            />

            <input type="submit" value="Add Pet"/>

            </form>
    )


}


export default PetsForm;
