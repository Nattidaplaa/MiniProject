import React, { Component } from 'react';
import '../App.css';
import ScrollArea from 'react-scrollbar'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Nav'
import Lisa from './Lisa'
import Jennie from './Jennie'
import Jisoo from './Jisoo'
import Rose from './Rose'
import Blackpink from './Blackpink'
import MV from './MV'

class Content extends Component {
  constructor(props) {
    super(props);
    const PAGES = [
      {
        name: '0',
        text: 'BlackPink',
        component: <Blackpink />
      },
      {
        name: '1',
        text: 'Lisa',
        component: <Lisa />
      },
      {
        name: '2',
        text: 'Jennie',
        component: <Jennie />
      },
      {
        name: '3',
        text: 'Rosé',
        component: <Rose />
      },
      {
        name: '4',
        text: 'Jisoo',
        component: <Jisoo />
      },
      {
        name: '5',
        text: 'Music Video',
        component: <MV />
        
      },
    ];

    this.state = { currentPage: PAGES[0], pages: PAGES };
    this.setPage = this.setPage.bind(this);
  }

  setPage(name) {
    const pages = this.state.pages.slice();
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].name === name) {
        this.setState({ currentPage: pages[i] });
      }
    }
  }

  render() {
    return (
      <div className="body1">
      <div className="body2">
        <div className="row">
          <div className="col-md-2 sidebar center white">
            <Nav setPage={this.setPage} currentPage={this.state.currentPage} pages={this.state.pages} />
            <a className="white" href="/">Logout</a>
          </div>
          <div className="col">
          <ScrollArea className="dis" >
            {this.state.currentPage.component}
          </ScrollArea>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Content