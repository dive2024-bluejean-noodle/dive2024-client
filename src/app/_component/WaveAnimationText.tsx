export default function WaveAnimationText({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) {
  return (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={'inline-block font-bold text-144 leading-144 animate-wave'}
          style={{
            animationDelay: delay + index + 's',
          }}>
          {char}
        </span>
      ))}
    </>
  );
}
