
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function app() {

    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    const boxReady = $('.box-ready');
    const boxGoodbye = $('.box-goodbye');
    const boxContainer = $('.box-container');
    const boxLoveYou = $('.box-love-you');

    function randomNumber(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    }

    boxReady.onclick = (e) => {

        const boxClose = e.target.closest('.box-close');
        const btnSuccessFirst = e.target.closest('.btn-success__first');
        const btnDangerFirst = e.target.closest('.btn-danger__first');

        if (boxClose || btnDangerFirst) {

            boxReady.style.display = 'none';
            boxGoodbye.style.display = 'flex';
            // boxReady.style.transform = 'scale(1)';
            
        }

        if (btnSuccessFirst) {
            boxReady.style.display = 'none';
            boxContainer.style.display = 'flex';
        }
        
    }

    boxGoodbye.onclick = (e) => {
        const btnReturn = e.target.closest('.btn-return');

        if (btnReturn) {
            boxGoodbye.style.display = 'none';
            boxReady.style.display = 'flex';
        }
    }

    boxContainer.onclick = (e) => {
        const boxClose = e.target.closest('.box-close');
        const boxDanger = e.target.closest('.box-container__danger');
        const boxSuccess = e.target.closest('.box-container__success');

        if (boxClose || boxDanger) {
            boxContainer.classList.add('margin-0');

            const boxWidth = boxContainer.offsetWidth;
            const boxHeight = boxContainer.offsetHeight;
    
            boxContainer.style.left = randomNumber(20, (clientWidth - boxWidth - 20)) + 'px';
            boxContainer.style.top = randomNumber(20, (clientHeight - boxHeight - 20)) + 'px';
        }

        if (boxSuccess) {
            
            boxContainer.style.display = 'none';
            boxLoveYou.style.display = 'flex';

        }
    }
}

app();