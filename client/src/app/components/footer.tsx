'use client';

import { Layout } from 'antd';

const { Footer } = Layout;

export default function contentFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
     Studio MIA © {new Date().getFullYear()} Planos de Aula APP
    </Footer>
  );
}
