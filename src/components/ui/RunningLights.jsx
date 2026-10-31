// Fixed, page-wide background: a faint grid with light pulses running along its lines.
// Positions are multiples of the 64px grid so every beam sits exactly on a line.
const beams = [
  { type: "h", position: 128, duration: "7s", delay: "0s" },
  { type: "h", position: 320, duration: "9s", delay: "3s" },
  { type: "h", position: 576, duration: "8s", delay: "5.5s" },
  { type: "h", position: 832, duration: "10s", delay: "1.5s" },
  { type: "h", position: 1088, duration: "9s", delay: "6.5s" },
  { type: "v", position: 64, duration: "11s", delay: "4.5s" },
  { type: "v", position: 320, duration: "8s", delay: "1s" },
  { type: "v", position: 704, duration: "10s", delay: "4s" },
  { type: "v", position: 1088, duration: "9s", delay: "7s" },
  { type: "v", position: 1408, duration: "7s", delay: "2s" },
  { type: "v", position: 1792, duration: "10s", delay: "5s" },
];

const RunningLights = () => {
  return (
    <div
      className="page-grid pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {beams.map(({ type, position, duration, delay }) => (
        <span
          key={`${type}-${position}`}
          className={type === "h" ? "beam-h" : "beam-v"}
          style={{
            [type === "h" ? "top" : "left"]: position,
            "--duration": duration,
            "--delay": delay,
          }}
        />
      ))}
    </div>
  );
};

export default RunningLights;
