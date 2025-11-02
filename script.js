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

let channels = {
  "Star Sports": "https://cdn.dadocric.st/embed2.php?id=starsp",
  "Star Sports 2": "https://cdn.dadocric.st/embed2.php?id=starsp2",
  "Star Sports Hindi": "https://cdn.dadocric.st/embed2.php?id=starsp3",
  "Sky Sports": "https://cdn.dadocric.st/embed2.php?id=crich2",
  "Astro Cricket": "https://crichdplayer.xyz/embed2.php?id=astrocric",
  "Willow Cricket": "https://cdn.dadocric.st/embed2.php?id=willow",
  "PTV Sports": "https://cdn.dadocric.st/embed2.php?id=ptvsp",
  "SuperSports Cricket": "https://cdn.dadocric.st/embed2.php?id=osncric",
  "Fox Sports": "https://cdn.dadocric.st/embed2.php?id=fox501",
  "Ten Sports": "https://cdn.dadocric.st/embed2.php?id=tensp",
  "Sony Sports 1": "https://cdn.dadocric.st/embed2.php?id=ten1",
};

const loadchannel = (val) => {
    document.getElementById('heads').innerHTML = val;
    document.getElementById('fr').src = channels[val];
    if(window.innerWidth < 580)    
        document.getElementById('btns').style.display = 'none';
        document.getElementById('menu_btn').innerHTML = String.raw`<img src='https://raw.githubusercontent.com/Gedipey/streams/main/134216_menu_lines_hamburger_icon.svg' alt='menu'>`;
}

