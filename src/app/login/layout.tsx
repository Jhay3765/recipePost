export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid place-content-center h-screen ">{children}</main>
  );
}
