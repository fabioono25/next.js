import React from "react";

import Link from "next/link";

function Folder4() {
  return (
    <>
      <div>Folder4</div>
      <Link href="/folder1/folder3">Folder 3</Link>
      <Link href="/about">About</Link>
    </>
  );
}

export default Folder4;
