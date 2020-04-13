import React, { Component } from 'react';
import './App.css';

import Sharing from './component/sharing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <Sharing
            url="https://github.com/ZYSzys/react-sharing"
            title="要分享的标题"
            description="分享内容"
            sites={[
              'qzone',
              'weibo',
              'google',
              'twitter',
              'qq',
              'tencent',
              'douban',
              'linkedin',
              'facebook',
            ]}
            summary="react-sharing made social media sharing simple."
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> 
        </header>
      </div>
    );
  }
}

export default App;
