const shortenbtn = document.getElementById("btn");

let url = "https://peoplebox.onrender.com";
// let url = "http://localhost:7070"

shortenbtn.addEventListener("click", () => {
    let urlinp = document.getElementById("url");
    // console.log(urlinp);

    // Construct the payload object
    const requestBody = {
        fullUrl: urlinp.value 
    };

    fetch(`${url}/url/shorten`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(requestBody) // Sending the object as JSON
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.message === "URL already present"){
            
            document.getElementById("output").innerText = `Short URL : ${url}/url/${data.shortUrl}`
        }else{
            document.getElementById("output").innerText = `Short URL : ${url}/url/${data.shortUrl}`
        }
    })
    .catch(err => console.error(err));
});


const logoutbtn = document.getElementById("logoutbtn")

logoutbtn.addEventListener("click",()=>{
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5500/Frontend/index.html"
})