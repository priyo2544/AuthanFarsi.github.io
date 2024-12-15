// For the typing animation (optional improvement for typing effect)
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text span');
    const words = ['Web Developer', 'Developer', 'Web Designer', 'Youtuber', 'Script Writer'];
    let wordIndex = 0;
    let charIndex = 0;
    
    function type() {
        if(charIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 200);
        } else {
            setTimeout(deleteText, 1500);
        }
    }

    function deleteText() {
        if(charIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    }

    type(); // Initial call to start typing
});
