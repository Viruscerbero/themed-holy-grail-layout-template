type SVGIconProps = { palette: { fill?: string; stroke?: string } };

export function Icon(props: SVGIconProps) {
  const { fill, stroke } = props.palette;

  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect x="65" y="59" width="49%" height="43%" fill={fill} />
      <path
        fill={fill}
        stroke={stroke}
        d="M200.8,53.9A103.4,103.4,0,0,0,128,24h-1.1A104,104,0,0,0,93.4,226.1,32,32,0,0,0,136,195.9V192a16,16,0,0,1,16-16h46.2a31.7,31.7,0,0,0,31.2-24.9,101.5,101.5,0,0,0,2.6-24A102.9,102.9,0,0,0,200.8,53.9ZM89,164.4A12,12,0,1,1,93.4,148,12,12,0,0,1,89,164.4ZM93.4,108A12,12,0,1,1,89,91.6,12.1,12.1,0,0,1,93.4,108ZM128,88a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm51,24.4A12,12,0,1,1,183.4,96,12.1,12.1,0,0,1,179,112.4Z"
      />
    </svg>
  );
}
