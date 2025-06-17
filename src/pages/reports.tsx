import Counter from '@/components/Counter';
import UserList from '@/UserList';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Row, Space, Table } from 'antd';
import React, { useState } from 'react';

const CustomHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <Card>📄 This is Tab 1 Content</Card>;
      case 'tab2':
        return <Card>📄 This is Tab 2 Content</Card>;
      default:
        return <Card>📄 Default Content</Card>;
    }
  };

  return (
    <PageContainer
      header={{
        title: 'Admin Management',
        subTitle: 'Manage all admins in one place',
        breadcrumb: {
          routes: [
            { path: '/', breadcrumbName: 'Home' },
            { path: '/admin', breadcrumbName: 'Admin' },
            { path: '/admin/admins', breadcrumbName: 'admin Management' },
          ],
        },
        extra: [
          <Button key="add" type="primary">
            Add admin
          </Button>,
          <Button key="export">Export</Button>,
        ],
      }}
      tabList={[
        {
          key: 'tab1',
          tab: 'Active admins',
        },
        {
          key: 'tab2',
          tab: 'Inactive admins',
        },
      ]}
      tabActiveKey={activeTab}
      onTabChange={(key) => {
        setActiveTab(key);
      }}
    >
      {renderContent()}
      <Space style={{ width: '100%', marginTop: '24px' }} direction="vertical" size={24}>
        <Row gutter={[50, 16]}>
          <Col xs={24} md={12}>
            <Card style={{ height: '212.6px' }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              style={{ height: '212.6px' }}
              // size="small"
              title="card 2"
              extra={<a href="#">More</a>}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Card title="Table">
          <Table dataSource={dataSource} columns={columns} />
        </Card>
        <UserList />
        <Counter />
      </Space>
    </PageContainer>
  );
};

export default CustomHeader;
