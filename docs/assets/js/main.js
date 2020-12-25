"use strict";const arrowList=document.querySelectorAll(".js-button");function getCollapsable(e){e.currentTarget.classList.toggle("rotateArrow");const t=e.currentTarget.id;document.querySelector(".section-"+t).classList.toggle("hideCollapsable")}for(let e=0;e<arrowList.length;e++)arrowList[e].addEventListener("click",getCollapsable);const palette1=document.querySelector(".js-paletteRadio1"),palette2=document.querySelector(".js-paletteRadio2"),palette3=document.querySelector(".js-paletteRadio3"),palette4=document.querySelector(".js-paletteRadio4"),palette1Value=parseInt(palette1.value),palette2Value=parseInt(palette2.value),palette3Value=parseInt(palette3.value),palette4Value=parseInt(palette4.value);function selectPalette1(){form.palette=palette1Value,renderPalette(),setLocalStorage()}function selectPalette2(){form.palette=palette2Value,renderPalette(),setLocalStorage()}function selectPalette3(){form.palette=palette3Value,renderPalette(),setLocalStorage()}function selectPalette4(){form.palette=palette4Value,renderPalette(),setLocalStorage()}function renderPalette(){const e=document.querySelector(".js-nameCard"),t=document.querySelector(".js-border1"),s=document.querySelector(".js-border2"),l=document.querySelector(".js-circle1"),a=document.querySelector(".js-circle2"),c=document.querySelector(".js-circle3"),r=document.querySelector(".js-circle4"),o=document.querySelector(".js-icon1"),i=document.querySelector(".js-icon2"),n=document.querySelector(".js-icon3"),d=document.querySelector(".js-icon4");!0===palette1.checked&&(e.classList.add("palette1_name"),e.classList.remove("palette2_name"),e.classList.remove("palette3_name"),e.classList.remove("palette4_name"),t.classList.add("palette1_border1"),t.classList.remove("palette2_border1"),t.classList.remove("palette3_border1"),t.classList.remove("palette4_border1"),s.classList.add("palette1_border2"),s.classList.remove("palette2_border2"),s.classList.remove("palette3_border2"),s.classList.remove("palette4_border2"),l.classList.add("palette1_circle1"),l.classList.remove("palette2_circle1"),l.classList.remove("palette3_circle1"),l.classList.remove("palette4_circle1"),a.classList.add("palette1_circle2"),a.classList.remove("palette2_circle2"),a.classList.remove("palette3_circle2"),a.classList.remove("palette4_circle2"),c.classList.add("palette1_circle3"),c.classList.remove("palette2_circle3"),c.classList.remove("palette3_circle3"),c.classList.remove("palette4_circle3"),r.classList.add("palette1_circle4"),r.classList.remove("palette2_circle4"),r.classList.remove("palette3_circle4"),r.classList.remove("palette4_circle4"),o.classList.add("palette1_icon1"),o.classList.remove("palette2_icon1"),o.classList.remove("palette3_icon1"),o.classList.remove("palette4_icon1"),i.classList.add("palette1_icon2"),i.classList.remove("palette2_icon2"),i.classList.remove("palette3_icon2"),i.classList.remove("palette4_icon2"),n.classList.add("palette1_icon3"),n.classList.remove("palette2_icon3"),n.classList.remove("palette3_icon3"),n.classList.remove("palette4_icon3"),d.classList.add("palette1_icon4"),d.classList.remove("palette2_icon4"),d.classList.remove("palette3_icon4"),d.classList.remove("palette4_icon4")),!0===palette2.checked&&(e.classList.remove("palette1_name"),e.classList.add("palette2_name"),e.classList.remove("palette3_name"),e.classList.remove("palette4_name"),t.classList.remove("palette1_border1"),t.classList.add("palette2_border1"),t.classList.remove("palette3_border1"),t.classList.remove("palette4_border1"),s.classList.remove("palette1_border2"),s.classList.add("palette2_border2"),s.classList.remove("palette3_border2"),s.classList.remove("palette4_border2"),l.classList.remove("palette1_circle1"),l.classList.add("palette2_circle1"),l.classList.remove("palette3_circle1"),l.classList.remove("palette4_circle1"),a.classList.remove("palette1_circle2"),a.classList.add("palette2_circle2"),a.classList.remove("palette3_circle2"),a.classList.remove("palette4_circle2"),c.classList.remove("palette1_circle3"),c.classList.add("palette2_circle3"),c.classList.remove("palette3_circle3"),c.classList.remove("palette4_circle3"),r.classList.remove("palette1_circle4"),r.classList.add("palette2_circle4"),r.classList.remove("palette3_circle4"),r.classList.remove("palette4_circle4"),o.classList.remove("palette1_icon1"),o.classList.add("palette2_icon1"),o.classList.remove("palette3_icon1"),o.classList.remove("palette4_icon1"),i.classList.remove("palette1_icon2"),i.classList.add("palette2_icon2"),i.classList.remove("palette3_icon2"),i.classList.remove("palette4_icon2"),n.classList.remove("palette1_icon3"),n.classList.add("palette2_icon3"),n.classList.remove("palette3_icon3"),n.classList.remove("palette4_icon3"),d.classList.remove("palette1_icon4"),d.classList.add("palette2_icon4"),d.classList.remove("palette3_icon4"),d.classList.remove("palette4_icon4")),!0===palette3.checked&&(e.classList.remove("palette1_name"),e.classList.remove("palette2_name"),e.classList.add("palette3_name"),e.classList.remove("palette4_name"),t.classList.remove("palette1_border1"),t.classList.remove("palette2_border1"),t.classList.add("palette3_border1"),t.classList.remove("palette4_border1"),s.classList.remove("palette1_border2"),s.classList.remove("palette2_border2"),s.classList.add("palette3_border2"),s.classList.remove("palette4_border2"),l.classList.remove("palette1_circle1"),l.classList.remove("palette2_circle1"),l.classList.add("palette3_circle1"),l.classList.remove("palette4_circle1"),a.classList.remove("palette1_circle2"),a.classList.remove("palette2_circle2"),a.classList.add("palette3_circle2"),a.classList.remove("palette4_circle2"),c.classList.remove("palette1_circle3"),c.classList.remove("palette2_circle3"),c.classList.add("palette3_circle3"),c.classList.remove("palette4_circle3"),r.classList.remove("palette1_circle4"),r.classList.remove("palette2_circle4"),r.classList.add("palette3_circle4"),r.classList.remove("palette4_circle4"),o.classList.remove("palette1_icon1"),o.classList.remove("palette2_icon1"),o.classList.add("palette3_icon1"),o.classList.remove("palette4_icon1"),i.classList.remove("palette1_icon2"),i.classList.remove("palette2_icon2"),i.classList.add("palette3_icon2"),i.classList.remove("palette4_icon2"),n.classList.remove("palette1_icon3"),n.classList.remove("palette2_icon3"),n.classList.add("palette3_icon3"),n.classList.remove("palette4_icon3"),d.classList.remove("palette1_icon4"),d.classList.remove("palette2_icon4"),d.classList.add("palette3_icon4"),d.classList.remove("palette4_icon4")),!0===palette4.checked&&(e.classList.remove("palette1_name"),e.classList.remove("palette2_name"),e.classList.remove("palette3_name"),e.classList.add("palette4_name"),t.classList.remove("palette1_border1"),t.classList.remove("palette2_border1"),t.classList.remove("palette3_border1"),t.classList.add("palette4_border1"),s.classList.remove("palette1_border2"),s.classList.remove("palette2_border2"),s.classList.remove("palette3_border2"),s.classList.add("palette4_border2"),l.classList.remove("palette1_circle1"),l.classList.remove("palette2_circle1"),l.classList.remove("palette3_circle1"),l.classList.add("palette4_circle1"),a.classList.remove("palette1_circle2"),a.classList.remove("palette2_circle2"),a.classList.remove("palette3_circle2"),a.classList.add("palette4_circle2"),c.classList.remove("palette1_circle3"),c.classList.remove("palette2_circle3"),c.classList.remove("palette3_circle3"),c.classList.add("palette4_circle3"),r.classList.remove("palette1_circle4"),r.classList.remove("palette2_circle4"),r.classList.remove("palette3_circle4"),r.classList.add("palette4_circle4"),o.classList.remove("palette1_icon1"),o.classList.remove("palette2_icon1"),o.classList.remove("palette3_icon1"),o.classList.add("palette4_icon1"),i.classList.remove("palette1_icon2"),i.classList.remove("palette2_icon2"),i.classList.remove("palette3_icon2"),i.classList.add("palette4_icon2"),n.classList.remove("palette1_icon3"),n.classList.remove("palette2_icon3"),n.classList.remove("palette3_icon3"),n.classList.add("palette4_icon3"),d.classList.remove("palette1_icon4"),d.classList.remove("palette2_icon4"),d.classList.remove("palette3_icon4"),d.classList.add("palette4_icon4"))}function resetPalettes(){1!=palette1.checked?palette1.checked=!0:(palette2.checked=!0)?palette2.checked=!1:(palette3.checked=!0)?palette3.checked=!1:(palette4.checked=!0)&&(palette4.checked=!1),renderPalette()}palette1.addEventListener("click",selectPalette1),palette2.addEventListener("click",selectPalette2),palette3.addEventListener("click",selectPalette3),palette4.addEventListener("click",selectPalette4);const inputList=document.querySelectorAll(".js-field");let inputValue,inputId,form={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:"url(https://i.picasion.com/pic90/02b56d6431f0a6fe7082958c95d7788d.gif)"};const resetButton=document.querySelector(".js-resetBtn");function saveField(e){inputValue=e.currentTarget.value,inputId=e.currentTarget.id,form[inputId]=inputValue,renderCard(),setLocalStorage()}function listenSaveField(){for(let e=0;e<inputList.length;e++)inputList[e].addEventListener("keyup",saveField)}function renderCard(){document.querySelector(".js-nameCard").innerHTML=form.name||"Nombre completo",document.querySelector(".js-positionCard").innerHTML=form.job||"Puesto",document.querySelector(".js-tlCard").href="tel:"+form.phone,document.querySelector(".js-emailCard").href="mailto:"+form.email,document.querySelector(".js-linkedinCard").href=form.linkedin,document.querySelector(".js-gitHubCard").href="https://github.com"+form.github,profileImage.style.backgroundImage=`url(${form.photo})`}const handleReset=function(){form.palette=1,form.name="",form.job="",form.email="",form.phone="",form.linkedin="",form.github="",form.photo="url(https://i.picasion.com/pic90/02b56d6431f0a6fe7082958c95d7788d.gif)",localStorage.removeItem("formData");for(const e of inputList)e.value="";profileImage.style.backgroundImage="url(https://i.picasion.com/pic90/02b56d6431f0a6fe7082958c95d7788d.gif)",profilePreview.style.backgroundImage="url(https://i.picasion.com/pic90/02b56d6431f0a6fe7082958c95d7788d.gif)",renderCard(),resetPalettes(),setLocalStorage()};resetButton.addEventListener("click",handleReset);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,form.photo=fr.result,setLocalStorage()}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const createCardbtn=document.querySelector(".js-createCard-btn"),createCardCollapsable=document.querySelector(".js-createCard-link"),shareCollapsableBorder=document.querySelector(".js-navShare");function showLink(){createCardbtn.classList.add("btnClick"),createCardCollapsable.classList.remove("hideCollapsable")}function hideShareBorder(){shareCollapsableBorder.classList.toggle("hideLineShare")}createCardbtn.addEventListener("click",showLink),shareCollapsableBorder.addEventListener("click",hideShareBorder);const cardLink=document.querySelector(".js-card-link"),twitterButton=document.querySelector(".js-twitter-btn");function sendRequest(){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(form),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){showURL(e)})).catch((function(e){console.log(e),cardLink.innerHTML="Error en el servidor"}))}function showURL(e){e.success?(cardLink.href=e.cardURL,cardLink.innerHTML=cardLink.href):cardLink.innerHTML="ERROR: "+e.error}function createTwitterLink(e){const t=encodeURIComponent("¡Ya formo parte del mundo de las sombras gracias a DevilAPPers Profile Cards!:"),s=cardLink.innerHTML;twitterButton.href=`https://twitter.com/intent/tweet?text=${t}&url=${s}`}function setLocalStorage(){localStorage.setItem("formData",JSON.stringify(form))}function getLocalStorage(){const e=JSON.parse(localStorage.getItem("formData"));if(null!==e){form=e,document.querySelector(".js-nameInput").value=form.name,document.querySelector(".js-positionInput").value=form.job,document.querySelector(".js-tlInput").value=form.phone,document.querySelector(".js-emailInput").value=form.email,document.querySelector(".js-linkedinInput").value=form.linkedin,document.querySelector(".js-gitHubInput").value=form.github,profileImage.style.backgroundImage=`url(${form.photo})`,profilePreview.style.backgroundImage=`url(${form.photo})`;document.querySelector("#palette"+form.palette).click()}renderCard(),listenSaveField()}createCardbtn.addEventListener("click",sendRequest),twitterButton.addEventListener("click",createTwitterLink),getLocalStorage();