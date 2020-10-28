function getPilihanKomputer(){
   const comp = Math.random();

   if( comp < 0.34 ) return 'gajah';
   if( comp >= 0.34 && comp < 0.67 ) return 'orang';
   return 'semut';
}

function getHasil(comp, player){
   if( player == comp ) return 'SERI!';
   if( player == 'gajah' ) return hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
   if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
   if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';   
}

function putar(){
   const imgKomputer = document.querySelector('.img-komputer');
   const gambar = ['gajah', 'semut', 'orang'];
   let i = 0;
   const waktuMulai = new Date().getTime();

   setInterval(function(){
      if((new Date().getTime() - waktuMulai) > 1000){
         clearInterval;
         return;
      }
      imgKomputer.setAttribute('src', 'img/'+ gambar[i++] +'.png');
      if(i == gambar.length) i = 0;
   },100)
}

function skor(hasil){
   
   if (hasil == 'MENANG!') return skorPlayer.innerHTML = (sPlay += 1);
   if (hasil == 'KALAH!') return skorKomputer.innerHTML = (sKom += 1);
}

const skorKomputer = document.querySelector('.skor-komputer');
const skorPlayer = document.querySelector('.skor-player');
let sKom = parseInt(skorKomputer.innerHTML);
let sPlay = parseInt(skorPlayer.innerHTML);


const pilihan = document.querySelectorAll('li img');


pilihan.forEach(function(pil){
   pil.addEventListener('click', function(){
      const pilihanKomputer = getPilihanKomputer();
      const pilihanPlayer = pil.className;
      const hasil = getHasil(pilihanKomputer, pilihanPlayer)
       

      putar();

      setTimeout(function(){
         const imgKomputer = document.querySelector('.img-komputer');
         imgKomputer.setAttribute('src', 'img/'+ pilihanKomputer +'.png');

         const info = document.querySelector('.info');
         
         info.innerHTML = hasil;
         skor(hasil);
      },1000)

      
   })
})

document.body.addEventListener('mousemove', function(event){
   const xPos = Math.round((event.clientX / window.innerWidth)*80)+175;
   const yPos = Math.round((event.clientY / window.innerHeight)*80)+175;
   document.body.style.backgroundColor = 'rgb('+xPos+',0,'+yPos+')';
})

