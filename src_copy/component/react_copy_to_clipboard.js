import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
const languageList =()  => [
    {
        title: 'English',
        address: 'https://www.gbc.team/en/',
    },
    {
        title: '中文',
        address: 'https://www.gbc.team/zh/',
    },
    {
        title: '日本語',
        address: 'https://www.gbc.team/ja/',
    },
    {
        title:"한국어",
        address:'https://www.gbc.team/kor/'
    }
]
class Clipboard extends React.Component {
  state = {
    value: '',
    copied: false, 
  };
 
  render() {
    return (
      <div>
          {
              languageList().map((item,index)=>
                  <p key={index}>
                    <span>{item.title}</span>
                    <br />
                    <span>{item.address}</span>
                    <CopyToClipboard text={item.address}
                        onCopy={(value,message) => this.copys(value,message)}>
                        <button>copy</button>
                        </CopyToClipboard>
                  </p>
              )
          }
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} /> 
      </div>
    );
  }
  copys=(value,message)=>{
      if(message){
        alert('复制成功，内容为:'+value)
      } 
  }
}
export default Clipboard