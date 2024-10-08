// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BlackSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8 15.998a7.947 7.947 0 01-5.657-2.342A7.947 7.947 0 010 7.998c0-2.136.832-4.145 2.343-5.656A7.947 7.947 0 017.999 0c2.137 0 4.146.832 5.657 2.343a7.947 7.947 0 012.342 5.656 7.947 7.947 0 01-2.342 5.657 7.947 7.947 0 01-5.657 2.342z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BlackSvgIcon;
/* prettier-ignore-end */
