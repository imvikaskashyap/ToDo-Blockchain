"use client";
import Wallet from "@/component/Wallet";
import { useState } from "react";

export default function Home() {

  const[account, setAccount] = useState(null) 

  return (
    <div>
    <h1>ToDO Application</h1>
      <Wallet account={account} setAccount={setAccount} />
    </div>
  );
}
