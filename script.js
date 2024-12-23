const url="http://localhost:3000/";

const personInfoList=document.querySelector("#person-info-list");
const header=document.getElementById("hdr");


fetch(url + "person-info")
.then(response => response.json())
.then(data=>{
    header.innerHTML=`<img src="${data.image}" alt="PlaceholderPhoto">
                        <h1>Orçun Gökoluk</h1>`;

    personInfoList.innerHTML=`
                    <li><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i> &emsp; ${data.job}</li>
                    <li><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i> &emsp; ${data.city}/${data.country}</li>
                    <li><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i> &emsp; ${data.email}</li>
                    <li><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>  &emsp; ${data.phone}</li> `
        
}).catch(err => console.log(err));

const skills=document.querySelector("#skills");

fetch(url + "skills")
.then(response => response.json())
.then(data=>
    {   const head1=document.createElement("h3");
        head1.textContent="Core Web Technologies";
        skills.appendChild(head1);

        const ul =document.createElement("ul");
        ul.classList.add("skill-lists");

        data.corewebtec.forEach(skill=>{
            ul.innerHTML+=`<li>${skill}</li>`
            skills.appendChild(ul);
        });

        const head2=document.createElement("h3");
        head2.textContent="CSS Frameworks And Preprocessors";
        skills.appendChild(head2);

        const ulv2 =document.createElement("ul");
        ulv2.classList.add("skill-lists");

        data.cssframeworks.forEach(skill=>{
            ulv2.innerHTML+=`<li>${skill}</li>`
            skills.appendChild(ulv2);
        });

        const head3=document.createElement("h3");
        head3.textContent="JavaScript Frameworks And Libraries";
        skills.appendChild(head3);

        const ulv3 =document.createElement("ul");
        ulv3.classList.add("skill-lists");

        data.javascriptframeworks.forEach(skill=>{
            ulv3.innerHTML+=`<li>${skill}</li>`
            skills.appendChild(ulv3);
        });

    }).catch(err => console.log(err));


    const languages=document.querySelector("#languages");
    fetch(url+"languages")
    .then(response => response.json())
    .then(data=>data.forEach(lang=>{
        languages.innerHTML+=`
        <p class="language-turkish-text">${lang.name}</p>
         <div class="load-back-div">
            <div style="width:${lang.percent}" class="load-front-div load-front-div-turkish">
                <p>${lang.level}</p>
            </div>
         </div>`;
    })).catch(err => console.log(err));

    const experience=document.querySelector("#experience");

    fetch(url+"experience")
    .then(response => response.json())
    .then(data=>data.forEach(exp=>{
        experience.innerHTML+=`
        <div class="border-div">
            <p class="head-p">${exp.position} / ${exp.company}</p>
            <p class="date"><i class="fa fa-calendar fa-fw w3-margin-right"></i>&nbsp;${exp.startdate.month} ${exp.startdate.year} - ${exp.enddate.month} ${exp.enddate.year}</p>
            <p class="grey">${exp.description}</p>
        </div>
             `         
    })).catch(err => console.log(err));

    const education=document.querySelector("#education");

    fetch(url+"education")
    .then(response => response.json())
    .then(data=>data.schools.forEach(edu=>{
        education.innerHTML+=`
            <article>
                <p>${edu.name} - ${edu.department}</p>
                <p class="date"><i class="fa fa-calendar fa-fw w3-margin-right"></i>&nbsp;${edu.startdate.year} - ${edu.enddate.year}</p>
            </article>
    `
    })).catch(err => console.log(err));

    const socialMedia=document.querySelector("#social-media");

    fetch(url+"socialmedia")
    .then(response => response.json())
    .then(data=>{
        socialMedia.innerHTML+=
        `
        <li><a href="${data.facebook}"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="${data.instagram}"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="${data.github}"><i class="fa-brands fa-github"></i></a></li>
        <li><a href="${data.linkedin}"><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="${data.x}"><i class="fa-brands fa-x-twitter"></i></a></li>
        `}).catch(err => console.log(err));