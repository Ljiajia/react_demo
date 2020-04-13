import ReactJson from "react-json-view"
import React from 'react'
import reactStringReplace from 'react-string-replace'
class JsonView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mockJson:{
                'aaa':'3333',
                'bbb':'lelelek',
                'ccc':[{
                    'c1':'q',
                    'c2':'qq',
                    'c3':'qqq'
                },{
                    'c1':'q',
                    'c2':'qq',
                    'c3':'qqq'
                },{
                    'c1':'q',
                    'c2':'qq',
                    'c3':'qqq'
                }]
            }
        }
    }
  
    showList=()=>{
        const text = 'Hey @ian_sinn, check out this link https://github.com/iansinnott/ Hope to see you at #reactconf';
        // eslint-disable-next-line no-unused-vars
        let replacedText;
        
        // Match URLs
        replacedText = reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
        <a key={match + i} href={match}>{match}</a>
        ));
        
        // Match @-mentions
        replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
        <a key={match + i} href={`https://twitter.com/${match}`}>@{match}</a>
        ));
        
        // Match hashtags
        replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
        <a key={match + i} href={`https://twitter.com/hashtag/${match}`}>#{match}</a>
        ));
        return replacedText
    }
    showTitle=()=>{
        const func = (match, index, offset) => <span key={index}>{match+'iii'}</span>;
       return reactStringReplace('heyd heyd youdd', /y/g, func);
    }
    render() { 
        let { mockJson } = this.state; 
    
        return (
            <div>
                <ReactJson src={mockJson} name={false} theme="apathy:inverted" iconStyle="circle" collapsed={true} enableClipboard={false} displayDataTypes={false} displayObjectSize={false}></ReactJson>
                <div> 
                    {
                        this.showList()
                    }
                    <p>Hey @ian_sinn, check out this link https://github.com/iansinnott/ Hope to see you at #reactconf</p>
                    {
                        this.showTitle()
                    }
                </div>
            </div>
          
        );
    }
}
 
export default JsonView;