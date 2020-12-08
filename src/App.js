import React, { useState, useEffect } from 'react'
import { employeesAPI } from './api/employeesAPI'
import './App.css'
import Birthdays from './components/Birthdays'
import Employees from './components/Employees'

export default function App() {

  const useLocalStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key)
    const initial = stored ? JSON.parse(stored) : defaultValue
    const [value, setValue] = useState(initial)

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    })

    return [value, setValue]
  }

  const [employees, setEmployees] = useState([])
  const [checkedEmployees, setBdays] = useLocalStorage('localEmployees', [])

  const changeBdays = (id, checked) => {
    (checked) 
      ? setBdays([...checkedEmployees, ...employees.filter(employee => employee.id === id)])
      : setBdays(checkedEmployees.filter(employee => employee.id !== id)) 
  }

  useEffect(() => {
    employeesAPI.getEmployees()
      .then(response => setEmployees(response))
  },[])
    
  return (
    <div className="App">
      <Employees employees={employees} changeBdays={changeBdays} checkedEmployees={checkedEmployees} />
      <Birthdays checkedEmployees={checkedEmployees} />
    </div>
  )
}
