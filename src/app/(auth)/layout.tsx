export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={'bg-bg-sea w-screen h-screen'}>{children}</div>;
}
