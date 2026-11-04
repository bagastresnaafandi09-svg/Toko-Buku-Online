const jam=new Date().getHours();let sapaan="Selamat malam";if(jam>=4&&jam<11)sapaan="Selamat pagi";else if(jam>=11&&jam<15)sapaan="Selamat siang";else if(jam>=15&&jam<18)sapaan="Selamat sore";document.getElementById("greeting").textContent=sapaan+", selamat datang!";
document.getElementById("totalBooks").textContent=dataKatalogBuku.length;
document.getElementById("totalOrders").textContent=JSON.parse(localStorage.getItem("pesananBuku")||"[]").length;
document.getElementById("totalShipments").textContent=dataPengiriman.length+JSON.parse(localStorage.getItem("pesananBuku")||"[]").length;
