import { ReactNode } from "react";
import { View } from "react-native";
import { Height, heights, Width, widths } from "../../tokens/size";
import { space, Space } from "../../tokens/space";

interface BoxProps {
  as?: any;
  children: ReactNode;
  flexDirection?: "row" | "column";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  margin?: Space;
  marginLeft?: Space;
  marginRight?: Space;
  marginHorizontal?: Space;
  marginTop?: Space;
  marginBottom?: Space;
  marginVertical?: Space;
  padding?: Space;
  paddingRight?: Space;
  paddingLeft?: Space;
  paddingHorizontal?: Space;
  paddingTop?: Space;
  paddingBottom?: Space;
  paddingVertical?: Space;
  width?: Width;
  height?: Height;
}

export function Box({
  as: Component = View,
  children,
  flexDirection,
  alignItems,
  justifyContent,
  margin: marginProp,
  marginLeft: marginLeftProp,
  marginRight: marginRightProp,
  marginHorizontal: marginHorizontalProp,
  marginTop: marginTopProp,
  marginBottom: marginBottomProp,
  marginVertical: marginVerticalProp,
  padding: paddingProp,
  paddingLeft: paddingLeftProp,
  paddingRight: paddingRightProp,
  paddingHorizontal: paddingHorizontalProp,
  paddingTop: paddingTopProp,
  paddingBottom: paddingBottomProp,
  paddingVertical: paddingVerticalProp,
  width: widthProp,
  height: heightProp,
}: BoxProps) {
  const styles = {
    flexDirection,
    alignItems,
    justifyContent,
    margin: marginProp && space[marginProp],
    marginLeft: marginLeftProp && space[marginLeftProp],
    marginRight: marginRightProp && space[marginRightProp],
    marginHorizontal: marginHorizontalProp && space[marginHorizontalProp],
    marginTop: marginTopProp && space[marginTopProp],
    marginBottom: marginBottomProp && space[marginBottomProp],
    marginVertical: marginVerticalProp && space[marginVerticalProp],
    padding: paddingProp && space[paddingProp],
    paddingLeft: paddingLeftProp && space[paddingLeftProp],
    paddingRight: paddingRightProp && space[paddingRightProp],
    paddingHorizontal: paddingHorizontalProp && space[paddingHorizontalProp],
    paddingTop: paddingTopProp && space[paddingTopProp],
    paddingBottom: paddingBottomProp && space[paddingBottomProp],
    paddingVertical: paddingVerticalProp && space[paddingVerticalProp],
    width: widthProp && widths[widthProp],
    height: heightProp && heights[heightProp],
  };

  return <Component style={styles}>{children}</Component>;
}
