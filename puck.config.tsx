import type { Config } from "@measured/puck";
import { Columns1, Columns1Props } from "./components/Columns1";
import { Columns2, Columns2Props} from "pseudo-ui-new-lib/dist/main";


type Props = {
  HeadingBlock: { title: string };
  Columns1: Columns1Props;
  Columns2: Columns2Props;
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Columns1: Columns1,
    Columns2: Columns2,
  },
};

export default config;

export const initialData: Record<string, any> = {
  "content": [
      {
          "type": "Columns2",
          "props": {
              "distribution": "auto",
              "columns": [
                  {},
                  {}
              ],
              "id": "Columns2-95ae17f7-9cde-4760-9db9-54b399d0623f"
          }
      }
  ],
  "root": {
      "props": {
          "title": ""
      }
  },
  "zones": {
      "Columns2-95ae17f7-9cde-4760-9db9-54b399d0623f:column-0": [
          {
              "type": "HeadingBlock",
              "props": {
                  "title": "Heading",
                  "id": "HeadingBlock-20a299ea-14bd-4803-87ce-0c65a33d8cae"
              }
          }
      ],
      "Columns2-95ae17f7-9cde-4760-9db9-54b399d0623f:column-1": []
  }
}