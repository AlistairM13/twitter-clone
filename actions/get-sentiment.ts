interface Sentiment {
    label: "positive"|"negative"|"neutral";
    score: number;
  }

export async function getSentiment(data: string): Promise<Sentiment[]> {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
		{
			headers: { Authorization: `${process.env.SENTIMENT_API}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result[0];
}

// query("I like you. I love you").then((response) => {
// 	console.log(JSON.stringify(response));
// });