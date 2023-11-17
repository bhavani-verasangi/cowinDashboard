// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  return (
    <div className="vaccination-by-coverage-container">
      <h1 className="vaccination-by-coverage-heading">Vaccination by age</h1>
      <PieChart>
        <Pie
          data={vaccinationByAgeDetails}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
