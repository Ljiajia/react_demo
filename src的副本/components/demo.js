import React, { useState, Component } from 'react';
import { Table, Radio, Divider } from 'antd';
import _ from "lodash"
import 'antd/dist/antd.css';
import "./demo.scss"

const columns = [
    {
        title: '企业名称',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '综合指数',
        dataIndex: 'zonghe',
    },
    {
        title: '创新指数',
        dataIndex: 'chuangxin',
    },
    {
        title: '营业收入（万元）',
        dataIndex: 'yingye',
    },
    {
        title: '税收（万元）',
        dataIndex: 'shuishou',
    },
    {
        title: '固投（万元）',
        dataIndex: 'gutou',
    },
    {
        title: '操作',
        dataIndex: 'reset',
    },
];
const data = [
    {
        key: '1',
        name: '第一家公司',
        zonghe: 'John Brown',
        chuangxin: 32,
        yingye: '11111',
        shuishou: '333',
        gutou: '777',
        reset: '已添加',
    },
    {
        key: '2',
        name: '第二家公司',
        zonghe: 'John Brown',
        chuangxin: 32,
        yingye: '11111',
        shuishou: '333',
        gutou: '777',
        reset: '已添加',
    },
    {
        key: '3',
        name: '第三家公司',
        zonghe: 'John Brown',
        chuangxin: 32,
        yingye: '11111',
        shuishou: '333',
        gutou: '777',
        reset: '已添加',
    },
    {
        key: '4',
        name: '第四家公司',
        zonghe: 'John Brown',
        chuangxin: 32,
        yingye: '11111',
        shuishou: '333',
        gutou: '777',
        reset: '已添加',
    },
];
const columns2=[    {
    title: '企业名称',
    dataIndex: 'name',
    // render: text => <a>{text}</a>,
},]
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        name: record.name,
    }),
}; 

let newarr = []
class Demo extends Component {
    state = {
        newdata: []
    }
    render() {
        // this.state.newdata.forEach(item=>{
        //     console.log(item,'it,,')
        // })
        console.log(this.state.newdata,'lis....')
        return (
        <div className='content'>
            <div className='left_box'>
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}

                    onRow={record => {
                        return {
                            onClick: () => this.addlist(record) // 点击 
                        };
                    }}
                    columns={columns}
                    dataSource={data}
                />
            </div>
                 
            <div className='right_box'>
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...rowSelection,
                    }}
                    columns={columns2}
                    dataSource={this.state.newdata}
                />
            </div>
        </div>
        )
    }
    addlist = (e) => {
        let last_data = _.cloneDeep(data);
        last_data.forEach(item => {
            if (item.key === e.key) {
                newarr.push(item)
                this.setState({
                    newdata: newarr
                })
            }
        })
    

       
    }
}

export default Demo