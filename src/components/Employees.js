import React from 'react'
import alphabet from '../store/alphabet'

export default function Employees ({employees, checkedEmployees, changeBdays}) {

    return <div>
        <h1 className="title">Employees</h1>
        <div className="employeeList">
        {alphabet.map(letter => <div key={letter} className="letterGroup">
                        <h3>{letter}</h3>
                        <div className="letterEmployees">
                        {(employees.filter(employee => employee.lastName.startsWith(letter)).length > 0) 
                            ? employees.filter(employee => employee.lastName.startsWith(letter))
                                .map(employee => <div key={employee.id}>
                                        <span className="employeeName">{employee.lastName} {employee.firstName} </span>
                                        {(checkedEmployees.filter(localEmployee => localEmployee.id === employee.id).length > 0)
                                            ? <input type="checkbox" checked={true} onChange={(e) => changeBdays(employee.id, e.target.checked)} />
                                            : <input type="checkbox" checked={false} onChange={(e) => changeBdays(employee.id, e.target.checked)} />
                                        }             
                                    </div>)
                            : <div> — </div>
                        }</div>
                </div>
            )}
        </div>
    </div>
}