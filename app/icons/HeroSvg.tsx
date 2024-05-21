export default function HeroSvg() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="lg:w-[450px] lg:h-[450px] w-full h-full"
    >
      <defs>
        <linearGradient id="paint-linear">
          <stop offset="0%" stopColor="#27b173">
            <animate
              attributeName="stop-color"
              values="#27b173;#1a663f;#26312d;#27b173"
              dur="12s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#1a663f">
            <animate
              attributeName="stop-color"
              values="#1a663f;#26312d;#27b173;#1a663f"
              dur="12s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <clipPath>
          <rect width="800" height="600" fill="white" />
        </clipPath>
      </defs>
      <g>
        {/* Connections */}
        <g className="layer-1">
          {[...Array(6)].map((_, i) =>
            [...Array(6)].map((_, j) => (
              <line
                key={`l1-${i}-${j}`}
                x1="100"
                y1={100 + i * 80}
                x2="300"
                y2={50 + j * 100}
                stroke="url(#paint-linear)"
                strokeWidth="2"
                className="connection"
              />
            ))
          )}
        </g>
        <g className="layer-2">
          {[...Array(6)].map((_, i) =>
            [...Array(6)].map((_, j) => (
              <line
                key={`l2-${i}-${j}`}
                x1="300"
                y1={50 + i * 100}
                x2="500"
                y2={50 + j * 100}
                stroke="url(#paint-linear)"
                strokeWidth="2"
                className="connection"
              />
            ))
          )}
        </g>
        <g className="layer-3">
          {[...Array(6)].map((_, i) =>
            [...Array(2)].map((_, j) => (
              <line
                key={`l3-${i}-${j}`}
                x1="500"
                y1={50 + i * 100}
                x2="700"
                y2={200 + j * 200}
                stroke="url(#paint-linear)"
                strokeWidth="2"
                className="connection"
              />
            ))
          )}
        </g>
      </g>
      <g>
        {/* Input Layer */}
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx="100"
            cy={100 + i * 80}
            r="15"
            fill="#27B173"
            className="node"
          />
        ))}

        {/* Hidden Layer 1 */}
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx="300"
            cy={50 + i * 100}
            r="15"
            fill="#1a663f"
            className="node"
          />
        ))}

        {/* Hidden Layer 2 */}
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx="500"
            cy={50 + i * 100}
            r="15"
            fill="#1a663f"
            className="node"
          />
        ))}

        {/* Output Layer */}
        {[...Array(2)].map((_, i) => (
          <circle
            key={i}
            cx="700"
            cy={200 + i * 200}
            r="15"
            fill="#26312d"
            className="node"
          />
        ))}
      </g>
      <style>
        {`
          .connection {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }

          @keyframes dash-layer-1 {
            0% {
              stroke-dashoffset: 1000;
            }
            12.5% {
              stroke-dashoffset: 1000;
            }
            25% {
              stroke-dashoffset: 0;
            }
            37.5% {
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dashoffset: 0;
            }
            62.5% {
              stroke-dashoffset: 0;
            }
            75% {
              stroke-dashoffset: 0;
            }
            87.5% {
              stroke-dashoffset: 1000;
            }
            100% {
              stroke-dashoffset: 1000;
            }
          }

          @keyframes dash-layer-2 {
            0% {
              stroke-dashoffset: 1000;
            }
            12.5% {
              stroke-dashoffset: 1000;
            }
            25% {
              stroke-dashoffset: 1000;
            }
            37.5% {
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dashoffset: 0;
            }
            62.5% {
              stroke-dashoffset: 0;
            }
            75% {
              stroke-dashoffset: 1000;
            }
            87.5% {
              stroke-dashoffset: 1000;
            }
            100% {
              stroke-dashoffset: 1000;
            }
          }

          @keyframes dash-layer-3 {
            0% {
              stroke-dashoffset: 1000;
            }
            12.5% {
              stroke-dashoffset: 1000;
            }
            25% {
              stroke-dashoffset: 1000;
            }
            37.5% {
              stroke-dashoffset: 1000;
            }
            50% {
              stroke-dashoffset: 0;
            }
            62.5% {
              stroke-dashoffset: 1000;
            }
            75% {
              stroke-dashoffset: 1000;
            }
            87.5% {
              stroke-dashoffset: 1000;
            }
            100% {
              stroke-dashoffset: 1000;
            }
          }

          .layer-1 .connection {
            animation: dash-layer-1 12s linear infinite;
          }

          .layer-2 .connection {
            animation: dash-layer-2 12s linear infinite;
          }

          .layer-3 .connection {
            animation: dash-layer-3 12s linear infinite;
          }
        `}
      </style>
    </svg>
  );
}
