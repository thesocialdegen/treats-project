import Showdown from "showdown";

const sanitizeMarkdown = (str?: string) => {
	if (str) {
		const converter = new Showdown.Converter();
		const html = converter.makeHtml(
			str
				.replace(/&nbsp;/g, ' ')
				.replace(/&amp;/g, '&')
				.replace(/\[.*?\]\((.*?)\)/g, '')
				.replace(/!\[.*?\]\((.*?)\)/g, '')
		);
		const plainText = html.replace(/(<([^>]+)>)/gi, '');
		return plainText;
	}
};
export default sanitizeMarkdown;
