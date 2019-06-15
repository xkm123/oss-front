import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Icon } from 'antd';
import Footer from './components/Footer';
import { userRouterConfig } from '../../routerConfig';
import './index.scss';

export default class UserLayout extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="header-banner">
            <h1>
              <Icon type="hdd" />
              对象存储 OSS
            </h1>
          </div>
        </header>
        <div className="login-body">
          <div className="login-box">
            <div className="banner">
              <div className="title">
                <h1>Balabala OSS</h1>
              </div>
            </div>
            <div className="login-form">
              <Switch>
                {userRouterConfig.map((item, index) => {
                  return item.component ? (
                    <Route
                      key={index}
                      path={item.path}
                      component={item.component}
                      exact={item.exact}
                    />
                  ) : null;
                })}
                <Redirect exact strict from="/user/*" to="/user/login" />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}