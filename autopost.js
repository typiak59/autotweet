javascript:(function() {
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
    const randomIndex = Math.floor(Math.random() * posts.length);
    const message = posts[randomIndex];
    const encodedMessage = encodeURIComponent(message);
    const url = "https://x.com/intent/tweet?text=" + encodedMessage;
    const newTab = window.open(url, "_blank");
    setTimeout(() => {
        const postButton = newTab.document.querySelector('[data-testid="tweetButton"]');
        if (postButton) {
            postButton.click();
        } else {
            console.error("Post button not found.");
        }
    }, 2000);
})();
