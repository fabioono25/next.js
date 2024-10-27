import React from "react";

import Link from "next/link";

function Folder1() {
  return (
    <>
      <div>Folder1</div>
      <div>
        <Link href="/folder1/folder2">Folder2</Link>
      </div>
    </>
  );
}

export default Folder1;
