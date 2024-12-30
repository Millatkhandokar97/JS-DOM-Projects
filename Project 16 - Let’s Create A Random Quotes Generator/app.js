//Project 16 - Let’s Create A Random Quotes Generator

const defaultQuotes = [
    'Educating the mind without educating the heart is no education at all',
    'Be a free thinker and don\'t accept everything you hear as truth. Be critical and evaluate what you believe in.',
    'Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.',
    'The more you know, the more you know you don\'t know.',
    'The most important relationship we can all have is the one you have with yourself, the most important journey you can take is one of self-discovery. To know yourself, you must spend time with yourself, you must not be afraid to be alone. Knowing yourself is the beginning of all wisdom.',
    'It is our choice of good or evil that determines our character, not our opinion about good or evil.',
    'Life is only meaningful when we are striving for a goal .',
    'Our problem is not that we aim too high and miss, but that we aim too low and hit.',
    'Criticism is something we can avoid easily by saying nothing, doing nothing, and being nothing.',
    'A fool contributes nothing worth hearing and takes offense at everything.',
    'We are what we repeatedly do... excellence, therefore, isn\'t just an act, but a habit and life isn\'t just a series of events, but an ongoing process of self-definition.',
    'Courage is the first virtue that makes all other virtues possible.',
    'What is the essence of life? To serve others and to do good.',
    'The worst form of inequality is to try to make unequal things equal.',
    'Doubt is the beginning of wisdom',
    'Tyrants preserve themselves by sowing fear and mistrust among the citizens by means of spies, by distracting them with foreign wars, by eliminating men of spirit who might lead a revolution, by humbling the people, and making them incapable of decisive action.',
    'Happiness is a quality of the soul...not a function of one\'s material circumstances.',
    'It is the mark of an educated mind to be able to entertain a thought without accepting it.',
    'Humility is a flower which does not grow in everyone\'s garden.',
    'Through discipline comes freedom.',
    'At the intersection where your gifts, talents, and abilities meet a human need; therein you will discover your purpose',
    'To appreciate the beauty of a snow flake, it is necessary to stand out in the cold.',

]

window.onload = function(){
    main()
}
function main(){
    const newQuotesBtn = document.getElementById('new-quote-btn')
    const quoteBody = document.getElementById('quote-body')

    newQuotesBtn.addEventListener('click', function(){
        const index = Math.floor(Math.random() * defaultQuotes.length)
        const quote = defaultQuotes[index]
        quoteBody.innerText = quote
    })

}

