'use client';

import { Layout } from 'antd';

const { Header } = Layout;

export default function contentHeader() {
  return (
    <Header 
    style={{ minWidth: '100vh', background: '#fff', padding: '0 24px' }}
    >
      <h2>A Recreativa</h2>
    </Header>
  );
}
