import React, { useState } from "react";
import { Segment, Grid, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const getCounterColor = () => {
    if (counter >= 0 && counter <= 4) {
      return 'green';
    } else if (counter >= 5 && counter <= 9) {
      return 'blue';
    } else {
      return 'red';
    }
  };
  return (
    <Segment  textAlign="center" compact style={{ marginLeft: "35em"}} >
      <Segment textAlign="center">
     <b> Count:</b>
      <br />
      <br/>
      <h1 style={{ color: getCounterColor() }}><b>{counter}</b></h1>
      <br />
      <br />
      

      <Grid textAlign="center">
        <Grid.Row row={1}>
          <Grid.Column>
            <Button
              color="white"
              onClick={increment}
              content="Increment"
            />
            <Button 
            
            color="white"
            disabled={counter === 0}
            onClick={decrement}
            content="Decrement"
          />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
      <br/>
      
      </Segment>
     
        Done by: Rudra Pratap Singh
        <br />
        Registration Number: 12016945
       
    
    </Segment>
    
    
  );
};

export default App;
