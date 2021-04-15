import React from 'react'
import { Route, Switch } from 'react-router'
import routes from '../../routes/routes';

const Main = () => {
    return (
        <main className="mainContainer">
                <Switch>
                {routes.map(({ path, component }) => (<Route path={path} component={component} key={path}/>))}
                </Switch>
        </main>
    )
}


export default Main;
