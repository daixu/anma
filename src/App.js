import React from 'react';
import { Provider } from 'react-redux';
import Main from './components/main';
import store from './store';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                <Provider store={store}/>
                <BrowserRouter>
                    <div>
                        <Redirect path="/" to="/index" />
                        <Route path='/index' exact component={Main} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
