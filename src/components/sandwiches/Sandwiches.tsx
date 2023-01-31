import './sandwiches.css'
import { sandwiches } from '../../assets/data.json'
const Sandwiches = () => {
  return (
    <div className="sandwich-con container-fluid d-flex justify-content-center col-md-10 col-sm-12">
      <div className='table-responsive-md'>
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
            {sandwiches.map((sandwich, index) => {
              return <tr key={index}>
                <td>{sandwich.name}</td>
                <td>{sandwich.ingredient}</td>
                <td>{sandwich.seasoning}</td>
                <td>{sandwich["meal-powers"]}</td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Sandwiches