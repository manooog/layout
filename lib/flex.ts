import styled from "styled-components";
import { FlexProps } from "react-simple-layout";
import box from "./box";

enum mainMap {
  start = "flex-start",
  end = "flex-end",
  center = "center",
  "space-between" = "space-between"
}

enum crossMap {
  top = "flex-start",
  center = "center",
  bottom = "flex-end",
  stretch = "stretch"
}

const FlexBox = styled(box)`
  justify-content: ${(props: FlexProps) =>
    props.m ? mainMap[props.m] : "flex-start"};
  align-items: ${(props: FlexProps) =>
    props.c ? crossMap[props.c] : "center"};
`;

export const Row = styled(FlexBox)`
  display: flex;
  flex-direction: row;
`;

export const Col = styled(FlexBox)`
  display: flex;
  flex-direction: column;
`;
