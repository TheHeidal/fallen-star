import MonthSegment, { MonthContent } from "./MonthSegment";
import { Radii, ringDivisionLineProps, ringProps } from "./orreryTypes";
import Ring from "./primitives/Ring";
import RingDivisionLines from "./primitives/RingDivisionLines";
import RingSegment from "./primitives/RingSegment";
import { v4 as uuidv4 } from "uuid";

export interface MonthRingProps {
  radii: Radii;
  ringProps?: Omit<ringProps, keyof Radii>;
  divisionsProps?: Omit<ringDivisionLineProps, keyof Radii>;
  months?: MonthContent[][];
}

export default function MonthRing({
  radii,
  ringProps = { className: "fill-slate-100" },
  divisionsProps = { divisions: 12 },
  months = Array.from({ length: 12 }, () => []),
}: MonthRingProps) {
  const monthSectionList = months.map((contents, index) => {
    return (
      <g
        key={uuidv4()}
        className="group"
        transform={`rotate(${(index * 360) / months.length})`}>
        <MonthSegment
          spanAngle={360 / months.length}
          radii={radii}
          contents={contents}
        />
      </g>
    );
  });
  let monthSections: JSX.Element[] = [];
  for (let i = 0; i < divisionsProps.divisions; i++) {
    monthSections = monthSections.concat(
      <g key={i} transform={`rotate(${i * (360 / divisionsProps.divisions)})`}>
        <RingSegment
          {...radii}
          spanAngle={360 / divisionsProps.divisions}
          className="fill-blue-200 transition-opacity opacity-0 hover:opacity-50"
        />
      </g>
    );
  }
  return (
    <g>
      <Ring {...radii} {...ringProps} />
      {monthSectionList}
      <RingDivisionLines {...radii} {...divisionsProps} />
    </g>
  );
}
