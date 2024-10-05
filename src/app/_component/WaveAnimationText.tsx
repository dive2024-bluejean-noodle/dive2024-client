export default function WaveAnimationText({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) {
  return (
    <div className={"whitespace-nowrap text-nowrap"}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={"inline-block font-bold text-124 leading-124 animate-wave"}
          style={{
            animationDelay: delay + index + "s",
          }}>
          {char}
        </span>
      ))}
    </div>
  );
}
