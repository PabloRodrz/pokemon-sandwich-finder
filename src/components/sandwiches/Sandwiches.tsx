import './sandwiches.css'
import { sandwiches } from '../../assets/data.json'
import { useState } from 'react'
const Sandwiches = () => {
  //selectores: exp no tiene tipo. Los demás tienen tipo y meal power
  const [type, setType] = useState("")
  const [mealPower, setMealPower] = useState("")
  const handleType = (e: any) => {
    setType(e.target.value)
  }
  const handleMealPower = (e: any) => {
    setMealPower(e.target.value)
  }

  const filteredSandwiches = sandwiches.filter(sandwich => {
    if (type.length > 0) {
     console.log(sandwich['meal-powers'].forEach((mealPower) => {
        if (mealPower.split(" ").includes(type)) {
          return sandwich
        }
      }))
    }
  })
  console.log(filteredSandwiches)
  return (
    <div className="sandwich-con container-fluid d-flex justify-content-center col-md-10 col-sm-12">
      <div className='table-responsive-md'>
        <div className='pt-5 d-flex justify-content-end'>
          <div>
            <select name="type" onChange={handleType} className='rounded border border-none'>
              <option value="" hidden>Choose the pokemon type</option>
              <option value="Normal">Normal</option>
              <option value="Fire">Fire</option>
              <option value="Flying">Flying</option>
              <option value="Water">Water</option>
              <option value="Grass">Grass</option>
              <option value="Electric">Electric</option>
              <option value="Ice">Ice</option>
              <option value="Fighting">Fighting</option>
              <option value="Poison">Poison</option>
              <option value="Ground">Ground</option>
              <option value="Psychic">Psychic</option>
              <option value="Bug">Bug</option>
              <option value="Rock">Rock</option>
              <option value="Ghost">Ghost</option>
              <option value="Dark">Dark</option>
              <option value="Dragon">Dragon</option>
              <option value="Steel">Steel</option>
              <option value="Fairy">Fairy</option>
            </select>
          </div>
          <div className='mp-select' onChange={handleMealPower}>
            <select name="meal-power" className='rounded border border-none'>
              <option value="" hidden>Choose a meal power</option>
              <option value="Encounter">Encounter</option>
              <option value="Title">Title</option>
              <option value="Catching">Catching</option>
              <option value="Humungo">Humungo</option>
              <option value="Exp">Experience</option>
              <option value="Sparkling">Sparkling</option>
              <option value="Raid">Raid</option>
              <option value="Egg">Egg</option>
              <option value="Teensy">Teensy</option>
              <option value="Item Drop">Item Drop</option>
            </select>
          </div>
        </div>
        <table className="table table-bordered table-hover mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ingredient(s)</th>
              <th>Seasoning</th>
              <th>Meal power</th>
            </tr>
          </thead>
          <tbody>
            {filteredSandwiches.map((sandwich, index) => {
              return <tr key={index}>
                <td>{sandwich.name}</td>
                <td>{sandwich.ingredient.map((ingredient, idx) => {
                  return sandwich.ingredient.length - 1 === idx ? ingredient : ingredient + ", "
                })}</td>
                <td>{sandwich.seasoning.map((seasoning, idx) => {
                  return sandwich.seasoning.length - 1 === idx ? seasoning : seasoning + ", "
                })}</td>
                <td>{sandwich["meal-powers"].map((mealPower, idx) => {
                  return sandwich["meal-powers"].length - 1 === idx ? mealPower : mealPower + ", "
                })}</td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Sandwiches