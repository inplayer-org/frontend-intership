import React from 'react';
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

                let day_parts = ["night", "night","night", "night","night", "morning" ,"morning","morning","morning","morning", "day","day","day","day","day","day",
                    "day","day","evening","evening","evening","evening","night", "night", "night"];
                if(response.status === 200){
                    const temp = response.data;
                    for(let i = 0; i<temp.list.length; i+=8){
                        let dt = temp.list[i].dt;
                        let description = temp.list[i].weather[0].description;
                        let date_format = new Date(dt * 1000);
                        temp.list[i] = {day: day_names[date_format.getDay()] + " ",month: m_names[date_format.getMonth()] + " ", year: date_format.getFullYear(), temperature: (temp.list[i].main.temp - 273.15).toFixed(0) + " ° C",description: description,image_src:"http://openweathermap.org/img/w/" + temp.list[i].weather[0].icon + ".png"};
                    }



                    let first = temp.list[0];
                    console.log(first);


                    this.setState({
                        data: temp,
                        first: first,
                        showForecast: true,
                        incorrect: false,
                        error: false
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
        const { data,first, input, error, incorrect, showForecast, celsius} = this.state;
        return (
            <div className="wrapper">
                {!showForecast &&
                    <div className="first">
                        <div className='first-div'>
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
                    </div>
                }

                {showForecast &&
                    <div className="second">
                        <div className='button'>
                       
                        <button onClick={()=> this.goBack()}>Back</button>
                        </div>
                        <div className='show_city_detalis'>
                            <div className='day-info'>


                <h1>{data.city.name}</h1>   <h3>{first.day}  {first.month} {first.year}   </h3>
              
                <p>      {first.description}       </p>
                  <span>{data.date_format}</span>
                  </div>
                  <div className='temperature-info'>

                <span> <h2> {first.temperature} </h2> 
               </span><img src={first.image_src} alt={"weather-logo"}/>
                <p></p>
                </div>

                            </div>





                  
                        {data.list.map((item, i)=>
                            <div key={i}>
                                <span>{item.day}</span>
                                <span>{item.month}</span>
                                <span>{item.year}</span>
                                <p>{item.temperature}</p>
                                <p>{item.description}</p>
                                <img src={item.image_src} alt={'weather-logo'}/>
                                </div>
                          

                          
                        
                            
                        )}
                       
                        </div>
                        

            

                }
               
            </div>
           
        )
        
    
    }
}

export default Input;
