import Document, {
	Html,
	Head,
	Main,
	NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(
							<App {...props} />
						)
				});

			const initialProps =
				await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
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
