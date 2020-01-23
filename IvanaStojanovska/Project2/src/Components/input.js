import React from 'react';
import './input-style.css'
const axios = require('axios');


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            input: '',
            error: false,
            incorrect: false,
            showForecast: false,
            celsius: false
        };
    }

    async search () {
        const { input } = this.state;
        if(input !== ''){
            try {
                const url = `https://api.openweathermap.org/data/2.5/forecast?appid=7f50891b4ff937764c48e7d2362e4053&q=${input}&cnt=40`;
                const response = await axios.get(url);
                let m_names = ["January", "February", "March",
                    "April", "May", "June", "July", "August", "September",
                    "October", "November", "December"];
                let day_names = ["Sunday","Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];
                if(response.status === 200){
                    const temp = response.data;
                    for(let i = 0; i<temp.list.length; i+=8){
                        let dt = temp.list[i].dt;
                        let description=temp.list[i].weather[0].description
                        let date_format = new Date(dt * 1000);
                        temp.list[i] = {day: day_names[date_format.getDay()] + " ",month: m_names[date_format.getMonth()] + " ", year: date_format.getFullYear(), temperature: (temp.list[i].main.temp - 273.15).toFixed(0) + " °C",  };
                    }
                      let first=temp.list[0]
                    console.log(temp);
                    console.log(first)
                    

                 

                    console.log(temp.list)
                 

                    this.setState({
                        first:first,
                        data: temp,
                        showForecast: true,
                        incorrect: false,
                        error: false,
                       

                    })

                }
            } catch (error) {
                this.setState({
                    incorrect: true
                })
            }
        } else{
            this.setState({
                error: true
            })
        }
    }

    goBack() {
        this.setState({
            showForecast: false
        })
    }

    changeView () {
        this.setState({
            celsius: !this.state.celsius
        })
    }

    render() {
        const { data, input, error, incorrect, showForecast, celsius,first} = this.state;
        return (
            <div className="wrapper">
                {!showForecast &&
                    <div className="first">
                        <form>
                            <input
                                aria-label="Name"
                                type="text"
                                placeholder={input}
                                value={input}
                                onChange={(e) => this.setState({ input: e.target.value })}
                                className={error? 'warning' : ''}
                            />
                        </form>
                        {incorrect && <p>City is not correct!</p>}
                        <button onClick={()=> this.search()}>Search</button>
                    </div>
                }



                {showForecast &&
                    <div className="second">
                        <div className='nameCity'>
                        <button onClick={()=> this.goBack()}>Back</button>
                        <h1>{data.city.name}</h1>
                        </div>

                        <div className='city-temp'>
                             
                <h3>{first.day}   {first.month} {first.getDay} {first.year} {first.date_format}</h3>
                <span>
                    <h1> {first.temperature} </h1>
                </span>

                         
    
                    
                       
                    </div>
                    <div className='card-days'>


                    {data.list.map((item, i)=>
                            <div key={i}>
                                <span>{item.day}</span>
                                { <span>{item.month}</span> }
                                { <span>{item.year}</span> }
                               
                                <p>{item.temperature}</p>



                            </div>
                        )}



                        </div>




                    </div>
                }
            </div>
        )
    }
}

export default Input;