"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config, { initialData } from "../../../puck.config";

export function Client({ path, data }: { path: string; data: Data }) {
  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={async (data: Data) => {
        console.log(data);
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
