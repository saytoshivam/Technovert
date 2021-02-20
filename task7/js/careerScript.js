const file=document.getElementById("resume");
file.addEventListener('change',(e)=>{
    console.log(e.target.files[0].name);
    document.getElementById("file-name").value=e.target.files[0].name;
});