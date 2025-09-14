import "./styles.css";

export const metadata = {
	title: "Store | Kitchen Sink",
	description: "This is the description"
};
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
