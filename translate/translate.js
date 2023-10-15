
'use strict';

{
    document.querySelectorAll('button')[0].addEventListener('click', () => {

        if (document.querySelector('p1').textContent === 'こんにちは') { document.querySelector('p1').textContent = 'hello' }
        else { document.querySelector('p1').textContent = 'こんにちは' }
    });
}


{
    document.querySelectorAll('button')[1].addEventListener('click', () => {

        if (document.querySelector('p2').textContent === 'おはよう') { document.querySelector('p2').textContent = 'good morning' }
        else { document.querySelector('p2').textContent = 'おはよう' }
    });
}




{
    document.querySelectorAll('button')[2].addEventListener('click', () => {

        if (document.querySelector('p3').textContent === 'りんご') { document.querySelector('p3').textContent = 'apple' }
        else { document.querySelector('p3').textContent = 'りんご' }
    });
}





{
    document.querySelectorAll('button')[3].addEventListener('click', () => {

        if (document.querySelector('p4').textContent === '魔法') { document.querySelector('p4').textContent = 'magic' }
        else { document.querySelector('p4').textContent = '魔法' }
    });
}



{
    document.querySelectorAll('button')[4].addEventListener('click', () => {

        if (document.querySelector('p5').textContent === '冬') { document.querySelector('p5').textContent = 'winter' }
        else { document.querySelector('p5').textContent = '冬' }
    });
}
