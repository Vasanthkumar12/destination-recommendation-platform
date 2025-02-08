import React, { useEffect,useState } from 'react'
import axios from 'axios'
import '../styles/Landing.css'

export const Landing = () => {
  const [states, setStates] = useState([])
  let paddingsLeft = [0, 35, 0, 170, 40]
  let paddingsTop = [0, 41, 24, 45, 10]
  const [padTop, setPadTop] = useState(paddingsTop[0])
  const [padLeft, setPadLeft] = useState(paddingsLeft[0])

  useEffect(() => {
      let index = 0
      let interval = setInterval(() => {
        index = (index+1) % 5
        setPadLeft(paddingsLeft[index])
        setPadTop(paddingsTop[index])
      }, 4000)
      return () => clearInterval(interval)
    }, [])

  useEffect(() => {
    const fetchStates = async () => {
      try {
        let res = await axios.get("https://states-c4c13-default-rtdb.firebaseio.com/states.json")
        setStates(res.data || [])
      }
      catch(error) {
        console.error("error occured : ", error)
      }
    }
    fetchStates()
  }, [])

  let stateselection = document.getElementById('state')
  states.map((stateObj) => {
    // console.log(stateObj.state)
    let option = document.createElement('option')
    option.value = stateObj.state
    option.innerHTML = stateObj.state
    stateselection.append(option)
  })
  const [formData, setFormData] = useState({
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("https://states-c4c13-default-rtdb.firebaseio.com/places.json")
    .then(res => console.log(res.data))
  }
  return (
    <div 
      id="landing"
      style ={{
        paddingLeft: padLeft,
        paddingTop: padTop
      }}
    >
        <p>Choose the state to find your ideal destinations</p>
        <form onSubmit={handleSubmit}>
          <select onChange={handleChange} name="state" id="state">
            <option value="">States</option>
          </select><br />
          <input id='ideal-dest' type="submit" value='Find Ideal Destinations'/>
        </form>
    </div>
  )
}
