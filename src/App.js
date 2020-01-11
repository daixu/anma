import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/main';
import Detail from './components/detail';
import store from './store';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                <Provider store={store}/>
                <BrowserRouter>
                    <div>
                        <Route path='/index' exact component={Main} />
                        <Route path='/detail/:id' exact component={Detail}/>
                        <Redirect path="/" to={{pathname: '/index'}} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
