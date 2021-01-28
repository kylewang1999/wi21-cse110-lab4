function count(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(count,1000);