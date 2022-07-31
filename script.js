let navbar = document.querySelector('.items');
let button = document.querySelector('.button');

document.querySelector('#menu-btn').onclick = () =>{
    document.querySelector('.items').style.display='block';
    document.querySelector('#menu-btn').style.display='none';
    document.querySelector('.button').style.display='block';
    document.querySelector('#close_btn').style.display='block';

}
document.querySelector('#close_btn').onclick = () =>{
    document.querySelector('.items').style.display='none';
    document.querySelector('#menu-btn').style.display='block';
    document.querySelector('.button').style.display='none';
    document.querySelector('#close_btn').style.display='none';

  
}
    window.onscroll = () =>{
        document.querySelector('.items').style.display='none';


}