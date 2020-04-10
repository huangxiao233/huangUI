import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom'; //找不到route就安装@types/react-router-dom
// import DialogExample from './lib/dialog/dialog.example'
import IconExample from './lib/icon/icon.example'
import Icon from './lib/icon/icon'

ReactDOM.render(
    <Router>
        <div>
            <header>
                <div className="logo">
                    huangUI
                </div>
                <Icon name="alipay"/>
            </header>
        </div>
        <div>
            <aside>
                <h2>组件</h2>
                <ul>
                    <li>
                        <Link to="/icon">图标</Link>
                    </li>
                </ul>
            </aside>
            <main>
                <Route path="/icon"  component = {IconExample}/>
            </main>
        </div>
    </Router>
,document.querySelector('#root')
)