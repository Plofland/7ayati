import Document, {
	Html,
	Head,
	Main,
	NextScript
} from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(
			ctx
		);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang="en">
				<Head></Head>
				<body>
					{/* Empty script tag as chrome bug fix, see https://stackoverflow.com/a/42969608/943337 */}
                    <script>0</script>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
