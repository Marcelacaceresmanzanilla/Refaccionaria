import * as React from "react";
import { PlasmicThemeBtn } from "./plasmic/refacciones/PlasmicThemeBtn";

function ThemeBtn_(props, ref) {
  const { plasmicProps } = PlasmicThemeBtn.useBehavior(props, ref);
  return <PlasmicThemeBtn {...plasmicProps} />;
}

const ThemeBtn = React.forwardRef(ThemeBtn_);

export default Object.assign(ThemeBtn, { __plumeType: "button" });
