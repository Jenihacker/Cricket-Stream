const hide_menu = () => {
    if(document.getElementById('btns').style.display === 'none') {
        document.getElementById('btns').style.display = 'flex';
        document.getElementById('menu_btn').innerHTML = String.raw`<i style="color:grey;" class='fa fa-light fa-square-xmark'></i>`;
    }
    else {
        document.getElementById('btns').style.display = 'none';
        document.getElementById('menu_btn').innerHTML = String.raw`<img src='https://raw.githubusercontent.com/Gedipey/streams/main/134216_menu_lines_hamburger_icon.svg' alt='menu'>`;
    }
}

const wind_size = () =>  {
    if(window.innerWidth > 580) {
        document.getElementById('bl1').style.display = 'none';
        document.getElementById('btns').style.display = 'flex';
	
    }
    else {
        document.getElementById('bl1').style.display = 'block';
        document.getElementById('menu_btn').innerHTML = String.raw`<i style="color:darkgrey" class='fa fa-light fa-square-xmark'></i>`;
    }
}

window.addEventListener('load',wind_size);
window.addEventListener('resize',wind_size);

let channels={
    "Star Sports" : "https://stream.crichd.vip/update/star.php",
    "Star Sports Hindi" : "https://stream.crichd.vip/update/star1hi.php",
    "Sky Sports" : "https://stream.crichd.vip/update/skys2.php",
    "Astro Cricket" : "https://crichdplayer.xyz/embed2.php?id=astrocric",
    "Willow Cricket" : "https://stream.crichd.vip/update/willowcricket.php",
    "PTV Sports" : "https://stream.crichd.vip/update/ptv.php",
    "SuperSports Cricket" : "https://stream.crichd.vip/update/sscricket.php",
    "Fox Sports" : "https://stream.crichd.vip/update/fox501.php",
    "Ten Sports" : "https://stream.crichd.vip/update/tensp.php"
};

const loadchannel = (val) => {
    document.getElementById('heads').innerHTML = val;
    document.getElementById('fr').src = channels[val];
    if(window.innerWidth < 580)    
        document.getElementById('btns').style.display = 'none';
        document.getElementById('menu_btn').innerHTML = String.raw`<img src='https://raw.githubusercontent.com/Gedipey/streams/main/134216_menu_lines_hamburger_icon.svg' alt='menu'>`;
}
