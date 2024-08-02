"use client";

import { ReactNode, useState } from "react";
import { ServerComponentOne } from "./server-component-one";
import { Server } from "http";

export const ClientComponentOne = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>ClientComponentOne</h1>
      {/* <ServerComponentOne /> Module not found: Can't resolve 'fs' */}
      {children}
    </>
  );
};
