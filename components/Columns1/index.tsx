import React from "react";
// import { ComponentConfig } from "@/core/types/Config";
import styles from "./styles.module.css";
// import { getClassNameFactory } from "@/core/lib";
// import { DropZone } from "@/core/components/DropZone";
// import { Section } from "../../components/Section";
import { ComponentConfig, DropZone } from "@measured/puck";
import getClassNameFactory from "../get-classname-factory";
import { Section1 } from "../Sections1";

const getClassName = getClassNameFactory("Columns", styles);

export type Columns1Props = {
  distribution: "auto" | "manual";
  columns: {
    span?: number;
  }[];
};

export const Columns1: ComponentConfig<Columns1Props> = {
  fields: {
    distribution: {
      type: "radio",
      options: [
        {
          value: "auto",
          label: "Auto",
        },
        {
          value: "manual",
          label: "Manual",
        },
      ],
    },
    columns: {
      type: "array",
      getItemSummary: (col, id) =>
        `Column ${id + 1}, span ${
          col.span ? Math.max(Math.min(col.span, 12), 1) : "auto"
        }`,
      arrayFields: {
        span: {
          label: "Span (1-12)",
          type: "number",
          min: 0,
          max: 12,
        },
      },
    },
  },
  defaultProps: {
    distribution: "auto",
    columns: [{}, {}],
  },
  render: ({ columns, distribution }) => {
    return (
      <Section1>
        <div
          className={getClassName()}
          style={{
            gridTemplateColumns:
              distribution === "manual"
                ? "repeat(12, 1fr)"
                : `repeat(${columns.length}, 1fr)`,
          }}
        >
          {columns.map(({ span }, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                gridColumn:
                  span && distribution === "manual"
                    ? `span ${Math.max(Math.min(span, 12), 1)}`
                    : "",
              }}
            >
              Start1
              <DropZone
                zone={`column-${idx}`}
                disallow={["Hero", "Logos", "Stats"]}
              />
              End1
            </div>
          ))}
        </div>
      </Section1>
    );
  },
};