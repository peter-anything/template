import React, { Component } from 'react';
import './ML.css';
import { Menu, Breadcrumb, Icon, Upload, message, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class ML extends Component{
    render(){
        return (
            <div className="ant-layout-aside window-frame">
              <aside className="ant-layout-sider">
                <div className="ant-layout-logo"><Icon type="user" /></div>
                <Menu mode="inline" theme="dark"
                  defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                  <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                    <Menu.Item key="1">选项1</Menu.Item>
                    <Menu.Item key="2">选项2</Menu.Item>
                    <Menu.Item key="3">选项3</Menu.Item>
                    <Menu.Item key="4">选项4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                    <Menu.Item key="5">选项5</Menu.Item>
                    <Menu.Item key="6">选项6</Menu.Item>
                    <Menu.Item key="7">选项7</Menu.Item>
                    <Menu.Item key="8">选项8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
                    <Menu.Item key="9">选项9</Menu.Item>
                    <Menu.Item key="10">选项10</Menu.Item>
                    <Menu.Item key="11">选项11</Menu.Item>
                    <Menu.Item key="12">选项12</Menu.Item>
                  </SubMenu>
                </Menu>
              </aside>
              <div className="ant-layout-main">
                <div className="ant-layout-header"></div>
                <div className="ant-layout-breadcrumb">
                  <Breadcrumb>
                    <Breadcrumb.Item>机器学习实战</Breadcrumb.Item>
                    <Breadcrumb.Item>图形识别</Breadcrumb.Item>
                    <Breadcrumb.Item>验证码</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="ant-layout-container">
                  <div className="ant-layout-content">
                    <div style={{ height: 590 }}>
                      上传图片：
                      <Upload {...props}>
                        <Button>
                          <Icon type="upload" /> Click to Upload
                        </Button>
                      </Upload>
                      <br/><br/>
                      <Button type="primary">识别验证码</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}