javascript:(function() {
    // Array of 10 different posts
    const posts = [
        "Just chilling today!",
        "What a beautiful morning!",
        "Time for some coffee.",
        "Loving this weather!",
        "Hello world, how’s it going?",
        "Random thoughts at midnight.",
        "Can’t stop listening to this song!",
        "Life is good, isn’t it?",
        "Trying something new today.",
        "Wow, what a crazy day!"
    ];
    
    // Pick a random post
    const randomIndex = Math.floor(Math.random() * posts.length);
    const message = posts[randomIndex];
    const encodedMessage = encodeURIComponent(message);
    
    // Open new tab with the random post
    const url = "https://x.com/intent/tweet?text=" + encodedMessage;
    const newTab = window.open(url, "_blank");
    
    // Attempt to click the "Post" button after a delay
    if (newTab) {
        setTimeout(() => {
            const postButton = newTab.document.querySelector('[data-testid="tweetButton"]');
            if (postButton) {
                postButton.click();
            } else {
                console.error("Post button not found.");
            }
        }, 2000); // 2-second delay for page load
    }
})();