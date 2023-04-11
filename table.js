function colorirData(){
    let day = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendario = document.getElementById('calendario');
    let colocarCor = calendario.getElementsByTagName('td')[parseInt(day)+5];
    colocarCor.style.background = color; 
}