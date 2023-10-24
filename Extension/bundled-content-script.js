//localStorage.no = "1";
//localStorage.link = "";
//localStorage.code = "";
async function init() {
  try {
    var a = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"enabled": true}, function(options){
              resolve(options.enabled);
          })
      });

    const enabled = await a;
    // console.log(enabled);
    

    var c = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"videoCount": 0}, function(options){
              resolve(options.videoCount);
          })
      });

    const videoCount = await c;
    // console.log(videoCount);


    if (!enabled) return;
    console.log(`[Codepen Shortcut v${chrome.runtime.getManifest().version} Enabled]`);




  }
  catch(err) {
    console.log(err.message);
  }
 
}
init();
















// let timer = 2000;
// for (var i = 0; i <1 ; i++) {
//   setTimeout(()=>{
//     if(document.querySelector("#editable-title-span")){
      
//       a1 = "<li><a href='#id";
//       a2 = localStorage.no;
//       a3 = "' vcdaldp-fin='' data-nodal=''>";
//       a4 = document.querySelector("#editable-title-span").innerText;
//       a5 = "</a></li>";
//       a = a1 + a2 + a3 + a4 + a5;
//       localStorage.link = localStorage.link + a;                
//     }


//   },timer)
//   timer +=1000;
//   setTimeout(()=>{
//     if (document.querySelector(".embed-modal-button")) {
//       document.querySelector(".embed-modal-button").click();
//     }
//   },timer)
//   timer +=2000;
//   setTimeout(()=>{
//     if (document.querySelector(".EmbedModalCodeAreas-module_tabPanel-JcR-b>textarea")) {
//        row_code = document.querySelector(".EmbedModalCodeAreas-module_tabPanel-JcR-b>textarea").value;
//        copy = row_code.slice(0, -80);

//        x1 = "<h2 id='id";
//        x2 = "'>";
//        x3 = "</h2>";
//        x = x1 + a2 + x2 + a4 + x3;
//        code = x + copy;
//        localStorage.code = localStorage.code + code;

//     z1 = "<div id='toc_container'><p class='toc_title'> Table of Contents </p><ul class='toc_list'>";
//     z2 = localStorage.link;
//     z3 = "</ul></div>";
//     z4 = localStorage.code;
//     z = z1 + z2 + z3 + z4;
//     localStorage.data = z;
//     localStorage.no++;
//     document.querySelector(".ModalEdit-module_closeButton-MgeSM").click();
//     }
//   },timer)
//   timer +=2000;
// }
   
          
