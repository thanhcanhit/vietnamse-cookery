import styles from "./details.module.css";
const HighlightText = ({ paragraph }: { paragraph: string }) => {
	// Search :
	if (paragraph.includes(":"))
		return (
			<p>
				<b>{paragraph.slice(0, paragraph.indexOf(":"))}</b>
				{paragraph.slice(paragraph.indexOf(":"), paragraph.length)}
			</p>
		);

	// Search by keyword
	const keywords = ["Bước", "Step", "Finnaly"];
	const isBold = keywords.some((keyword) =>
		paragraph.toLowerCase().includes(keyword.toLowerCase())
	);

	return <p className={isBold ? styles.bold : ""}>{paragraph}</p>;
};

export default HighlightText;