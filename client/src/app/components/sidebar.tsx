'use client';

import { Layout, Menu } from 'antd';
import {
  FileOutlined,
  UploadOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export default function Sidebar() {
  return (
    <Sider
      width={200}
      style={{ background: '#001529', color: 'white', minHeight: '100vh' }}
    >
      <div style={{ padding: '16px', fontWeight: 'bold', color: '#fff' }}>
        Plano Aula App
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          { key: '1', icon: <HomeOutlined />, label: 'Início' },
          { key: '2', icon: <UploadOutlined />, label: 'Enviar Arquivo' },
          { key: '3', icon: <FileOutlined />, label: 'Planos Salvos' },
        ]}
      />
    </Sider>
  );
}
