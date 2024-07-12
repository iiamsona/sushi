'use client';
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo from "@/public/logo.svg"
export default function HeaderMenu() {
  return (
    <nav>
      <div className='contaioner'>
    <div className='logo'>
    <Image src={logo} alt="logo" />
    </div>
    <div className='menu'>
    <Link href="/menu">Menu</Link>
    <Link href="/delivery">Delivery</Link>
    <Link href="/about_us">About us</Link>
    //input
    //busket
    //user
    //languages
    </div>
      </div>
    </nav>
  );
}
