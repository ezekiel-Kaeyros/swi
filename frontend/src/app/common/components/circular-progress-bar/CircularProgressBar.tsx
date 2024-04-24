// import React from "react";
// import {CircularProgress} from "@nextui-org/react";

// const CircularProgressBar = () => {
//   return (
//     <CircularProgress
//     //   label="Speed"
//       size="lg"
//       value={"1/5" as any}
//       color="success"
//       formatOptions={{ style: "unit", unit: "kilometer" }}
//       showValueLabel={true}
//     />
//   );
// }
// export default CircularProgressBar; 

import { FC } from 'react'

interface Props {
  strokeWidth?: number
  sqSize?: number
  percentage: number
  mt_style?: string; 
  radial_color?: string;
}

function percentageToFraction(percentage: any, denominator: any) {
    const fraction = percentage / 100;
    const numerator = fraction * denominator;
    return `${numerator}/${denominator}`;
}

const CircularProgressBar: FC<Props> = (props) => {
  const { strokeWidth = 8, sqSize = 160, percentage } = props
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox} className={ props.mt_style ? props.mt_style : "mt-0 h-10" }>
      <circle
        className="fill-none stroke-transparent"
        // className="fill-none stroke-gray-200"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className={`fill-none ${ props.radial_color ? props.radial_color : "stroke-slate-200"}  transition-all ease-in delay-200`}
        // className="fill-none stroke-violet-600 transition-all ease-in delay-200"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text x="80" y="80" color='white' fill='white' font-family="Verdana" font-size="60" text-anchor="middle" alignment-baseline="middle">{ percentageToFraction(percentage, 10) }</text>
    </svg>
  )
}

export default CircularProgressBar