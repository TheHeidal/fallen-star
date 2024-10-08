import { polarToCartesian } from "./angleMisc";
import { Radii, SpanAngle } from "./orreryTypes";

export type ringSegmentProps = SpanAngle &
  Radii &
  React.SVGProps<SVGPathElement>;

export default function RingSegment(props: ringSegmentProps) {
  return (
    <path
      {...props}
      d={`
      M 0 ${-props.extRadius}
      A ${props.extRadius} ${props.extRadius}
        0
        ${props.spanAngle > 180 ? "1" : "0"}
        ${props.spanAngle > 0 ? "1" : "0"}
        ${polarToCartesian(props.extRadius, props.spanAngle).str}
      L ${polarToCartesian(props.intRadius, props.spanAngle).str}
      A ${props.intRadius} ${props.intRadius}
        0
        ${props.spanAngle > 180 ? "1" : "0"}
        ${props.spanAngle > 0 ? "0" : "1"}
        0 ${-props.intRadius}
      L 0 ${-props.extRadius}
      `}
    />
  );
}
