import './globals.css';

export const metadata = {
	title: 'Red Blue Game',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body cz-shortcut-listen='true'>{children}</body>
		</html>
	);
}
