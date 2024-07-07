import React from "react";
import Image from "next/image";
import "@radix-ui/themes/styles.css";
import { Button,Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Theme>
        <Image src="/Home.jpg" layout="fill" alt="kitty" className="-z-50 fixed" />
        <div className="flex flex-col items-center  h-screen">
          <Button color="crimson" variant="soft" radius="large" size="3" style={{marginTop:'14rem',width:'6rem',letterSpacing:'1px'}}>
            <b>LOGIN</b>
          </Button>
        </div>
      </Theme>
    </main>
  );
}
