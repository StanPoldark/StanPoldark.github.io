var sakura = new Sakura('body');

function SwtichBackground() {
    const bg = document.getElementById('web_bg');
    const width = window.innerWidth;
    if (width <= 420) {
        bg.style.backgroundPositionX = 25 + '%';
        console.log('test');
        var x = bg.style.backgroundPositionX.replace('%', '');
        if (x == 25) {
            while (true) {
                if (x == 75 ) {
                    break;
                }
                x += 5;
                setInterval(bg.style.backgroundPositionX = x + '%',100)              
            }          
        }
        if (x == 75)
        {
            while (true) {
                if (x == 25) {
                    break;
                } 
                x -= 5;
                setInterval(bg.style.backgroundPositionX = x + '%',100)              
            }          
        }
    }
}
SwtichBackground()