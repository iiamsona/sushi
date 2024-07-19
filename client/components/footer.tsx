"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';;
type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

export default function Footer() {
  return (
   <div>
    <div className="flex justify-between">
    <div className="flex flex-col">
  <div>Compamy</div>
  <div>About us </div>
  <div>Careers</div>
  <div>Blog</div>
</div>
<div className="flex flex-col">
  <div>Contact</div>
  <div>Help & Support </div>
  <div>Partner with us</div>
  <div>Ride with us</div>
</div>
<div className="flex flex-col">
  <div>FAQ</div>
  <div>Terms & Conditions </div>
  <div>Refund & Cancellation</div>
  <div>Privacy Policy</div>
</div>
<div className="flex flex-col">
  <div>FOLLOW US</div>
  <div className="flex"> 
  <div>Instagram</div>
  <div>Facebook</div>
  </div>
  <div>Receive exclusive offers in your mailbox</div>
  <div>
  <Search
      placeholder="Enter your mail"
      enterButton="Submit"
      size="large"
    />
  </div>
</div>

    </div>
    <div className="flex justify-center">
    All rights Reserved
copyright
Your Company, 2024
    </div>
   </div>
  );
}
