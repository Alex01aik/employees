import  months from '../store/months'

export default function Birthdays (props) {
    const employees = props.checkedEmployees
    
    return <div className="birthdays">
        <h1 className="title">Birthdays</h1>
        {(employees.length > 0)
        ? Object.keys(months).map(month => (
            (employees.filter(employee => months[parseInt(employee.dob.split('-')[1])] === months[month]).length > 0)
            ? <div key={month}>
                 <h2>{months[month]}</h2>
                 {employees.filter(employee => months[parseInt(employee.dob.split('-')[1])] === months[month]).map(employee => (
                <div key={employee.id}>
                    <span><strong>{employee.lastName} {employee.firstName}</strong>
                    &nbsp;- {employee.dob.split('-')[2].search('T')}
                    &nbsp;{months[parseInt(employee.dob.split('-')[1])]}
                    &nbsp;{employee.dob.split('-')[0]} year
                    </span>
                </div> 
                ))}
            </div>
            : <div key={month}></div>
        ))
        : <div>No selected employees</div>}
    </div>
}