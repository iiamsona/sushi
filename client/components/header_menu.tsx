'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import basket from '@/public/basket.svg';
import user from '@/public/user.svg';
import armenian from '@/public/languages/armenian.svg';
import russian from '@/public/languages/russian.svg';
import english from '@/public/languages/english.svg';
import { DownOutlined, GlobalOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, MenuProps, Input } from 'antd';

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info(`Click on menu item: ${e.key}`);
};

const items: MenuProps['items'] = [
  {
    label: 'Armenian',
    key: '1',
    icon: <Image src={armenian} alt="Armenian" width={20} height={20} />,
  },
  {
    label: 'Russian',
    key: '2',
    icon: <Image src={russian} alt="Russian" width={20} height={20} />,
  },
  {
    label: 'English',
    key: '3',
    icon: <Image src={english} alt="English" width={20} height={20} />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function HeaderMenu() {
  return (
    <nav className='flex items-center justify-center w-full'>
      <div className='container flex justify-between items-center w-full'>
        <div className='logo'>
          <Image src={logo} alt="logo" />
        </div>
        <div className='menu flex items-center space-x-4'>
          <Link href="/menu">Menu</Link>
          <Link href="/delivery">Delivery</Link>
          <Link href="/about_us">About us</Link>
          <Input className='w-2/5' placeholder="Philadelphia" prefix={<SearchOutlined />} />
          <Image src={basket} alt="basket" />
          <Image src={user} alt="user" />
          <Dropdown menu={menuProps}>
            <Button style={{ width: 'fit-content' }}>
              <Space>
                <GlobalOutlined />
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
