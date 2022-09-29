self.addEventListener('install',(ev)=>{
    console.log("SW instalado correctamente...");
})


self.addEventListener('activate', (event) => {
    console.log("SW activado...")
})

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes(".jpg")) {  
        console.log(event.request.url)     
        event.respondWith(fetch("./images/image2.jpg"))
    }

    const resp = fetch(event.request.url)
    fetch(event.request.url).then((response)=>{
        if(response.ok){
            event.respondWith(resp)
        }else{                     
            event.respondWith(fetch ('./images/image2.jpg'))
        }  
    }).catch((error)=>{
        console.log(error);
    })
    
})  