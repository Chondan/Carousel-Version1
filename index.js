(() => {
    function App() {
        const previousBtn = document.getElementById("previous");
        const nextBtn = document.getElementById("next");
        const figure = document.getElementsByTagName('figure')[0];
        let imgIndex = 0;
        previousBtn.addEventListener('click', () => {
            imgIndex--;
            if (imgIndex < 0) {
                imgIndex = 3;
            }
            figure.style.transform = `translate(${-1 * imgIndex * 20}%, 0)`;
        });
        nextBtn.addEventListener('click', () => {
            imgIndex++;
            if (imgIndex == 4) {
                imgIndex = 0;
            }
            figure.style.transform = `translate(${-1 * imgIndex * 20}%, 0)`;
        });
    }
    App();
})();