import React from 'react';
import './App.css';
import GoodsMain from './GoodsMain';
// import { Switch, Route } from 'react-router-dom';





class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cost: {},
      count: 0
    }
  }
  render() {
    let goodsArr = this.props;
    console.log(goodsArr)
    return (
      <>
        <GoodsMain />
       
        {/* <Switch>

          <Route exact path="/cart" component={Cart} />
        </Switch> */}




      </>
    );
  }

}

export default App;
