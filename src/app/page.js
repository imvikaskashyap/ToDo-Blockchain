"use client";
import Wallet from "@/component/wallet";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const[account, setAccount] = useState(null) 

  return (
    <div>
      <h1>Hello world</h1>
      <Wallet account={account} setAccount={setAccount} />
    </div>
  );
}
