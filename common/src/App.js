import React from "react";
import Youtube from "./contextapi/youtube/Youtube";
import Book from "./contextapi/book/Book";
import Start from "./transition/Start";

function App() {
	return (
		<div>
			<Book />
			<Youtube />
			<Start />
		</div>
	);
}

export default App;
