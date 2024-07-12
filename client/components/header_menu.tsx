'use client';
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo from "@/public/logo.svg"
import basket from "@/public/basket.svg"
import user from "@/public/user.svg"
import armenian from "@/public/languages/armenian.svg"
import russian from "@/public/languages/russian.svg"
import english from "@/public/languages/english.svg"


export default function HeaderMenu() {
  return (
    <nav className='flex'>
      <div className='contaioner flex justify-between w-full'>
    <div className='logo'>
    <Image src={logo} alt="logo" />
    </div>

    <div className='menu flex justify-center items-center'>
    <Link href="/menu">Menu</Link>
    <Link href="/delivery">Delivery</Link>
    <Link href="/about_us">About us</Link>
    <input type="search" name="nav-search" id="" />
    <Image src={basket} alt="basket" />
    <Image src={user} alt="user" />
    <Image src={armenian} alt="languages" />
    <Image src={russian} alt="languages" />
    <Image src={english} alt="languages" />
    </div>
      </div>
    </nav>
  );
}
