import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FunctionComponent from './FunctionComponent'
import HomeComponent from './HomeComponent'
import ListComponent from './ListComponent'
import UsersComponent from './UsersComponent'
export default function RouterComponent() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <h1 className="text-center text-primary">Latihan aja sih</h1>
                </Route>
                <Route path="/stateManage">
                    <HomeComponent />
                    <br />
                    <FunctionComponent />
                </Route>
                <Route path="/belajarApi">
                    <UsersComponent />
                </Route>
                <Route path="/membuatToDoList">
                    <ListComponent />
                </Route>
            </Switch>
        </div>
    )
}
