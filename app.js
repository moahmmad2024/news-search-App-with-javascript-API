const apiKey = "67bc9ad54164440c929577ab8f023d36"; // apikey

const blogContainer = document.getElementById('blog_container');

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=Apple&from=2024-05-27&sortBy=popularity&apiKey=${apiKey}`; // apikey 
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data.articles; 
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        if (article.urlToImage) { // urlToImage
            const img = document.createElement("img");
            img.src = article.urlToImage;
            img.alt = article.title;
            blogCard.appendChild(img);
        }

        const title = document.createElement("h2");
        title.textContent = article.title;

        const description = document.createElement("p");
        description.textContent = article.description;

        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
    });
}

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random news", error);
    }
})();
