import './Article.css';

function Article() {
	return (
		<section id="section-container">
			<h1>An online Pomodoro timer to keep you focused.</h1>
			<article className="article">
				<h2>What is the Pomodoro Technique?</h2>
				<p>The Pomodoro Technique is a time management technique developed by Francesco Cirillo in the late 1980s. This method uses a timer to break work down into set intervals, typically 25 minutes of work, separated of short breaks of about 5 minutes. Each interval is known as a <em>pomodoro</em>, the Italian word for "tomato".</p>
			</article>
			<article className="article">
				<h2>What is PomoWatch?</h2>
				<p>PomoWatch is a clone of <a href="https://pomofocus.io/">Pomofocus</a>. Check out their website to learn more. I thought this would be a fun little project to do this summer, while learning front-end web development. While I personally do not use the Pomodoro Technique myself, I'm sure that there are others that benefit from it, so maybe this tool could be useful for you.</p>
			</article>
		</section>
	)
}

export default Article;