import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FunctionComponent from './FunctionComponent'
import HomeComponent from './HomeComponent'
import ListComponent from './ListComponent'
import UsersComponent from './UsersComponent'
import Logo from '../logo.svg';
export default function RouterComponent() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <div className="text-center">
                        <img src={Logo} alt="gambar" width="200" />
                        <h1 className="text-primary">Latihan aja sih</h1>
                    </div>
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
