# Overview

Covid Daily Data is a data visual app that allows users to check out updated Covid Test data of their home state.   

Please check it out [here](https://echen831.github.io/MB_SJHackathon/).

## Technologies Used:

* React/Redux
* Javascript
* HTML/CSS
* D3
* Recharts

## Technical Challenges
* Using D3 to draw interactive map and update information.
* Manipulating JSON object structure to pass correct props to different components.
* Utilizing Recharts and D3 to display acurate information on graphs and tooltips.


## Features:

### Updated daily data:

* Users can see updated Covid testing data of the current day.

### Historical Data:

* Users can also see historical testing data of a specific state.


#### Sample Code: 

The follow code snippet shows a fecthHistData function used to fetch the historical data for a specific State.

```
  const fetchHistData = (state) => {
    setHistIsLoaded(false);
    fetch(`https://api.covidtracking.com/v1/states/${state}/daily.json`)
      .then(res => res.json())
      .then((result) => {
        let newResult = result.map(res => {
            let newRes = Object.assign({}, res);
            newRes.date = setDate(newRes.date);
            return newRes;
        })
        setHistIsLoaded(true);
        setHistdata(newResult);
      },
        (error) => {
          setHistIsLoaded(true);
          setHistError(error)
        }
      )
  }

```


#### Sample Code: 

This code snippet shows an interactive AreaCharts component from Recharts

```
            <div className='history-wrapper'>
                <h3>Historic Data</h3>    
                <AreaChart
                    width={450}
                    height={225}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 30, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip date={data.date}/>}/>
                    <Legend />
                    <Area type="monotone" dataKey="positive" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="negative" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="death" stackId="2" stroke="#FA5745" fill="#FA7D72" />
                </AreaChart>
            </div>

```

#### Sample Code:

The following code snippet shows use of Recharts Custom Tool Tip function with vanilla javascript to change the price amount when a user moves the cursor over the graph:
```
const CustomTooltip = (props) => {
    if (props.active) {
        return (
            <div className="custom-tooltip">
                <li className="date">{props.payload[0].payload.date}</li>
                <li className="negative">Neg: {props.payload[0].payload.negative}</li>
                <li className="positive">Pos: {props.payload[0].payload.positive}</li>
                <li>Deaths: {props.payload[0].payload.death}</li>
            </div>
        );
    }

    return null;
};

```

