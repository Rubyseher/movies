import React from "react";
import Image from "next/image";
import "@radix-ui/themes/styles.css";
import { Button, Theme } from "@radix-ui/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <Theme>
        <Image src="/Home.jpg" layout="fill" alt="kitty" className="-z-50 fixed" />
        <div className="flex flex-col items-center  h-screen">
          <Button
            color="crimson"
            variant="soft"
            radius="large"
            size="3"
            style={{ marginTop: "14rem", letterSpacing: "1px", display: "inline-block", width: "14rem", fontWeight: "800" }}
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} style={{ width: "22px", display: "inline-flex" ,marginRight:'10px'}} />
            LOGIN
          </Button>
        </div>
      </Theme>
    </main>
  );
}
