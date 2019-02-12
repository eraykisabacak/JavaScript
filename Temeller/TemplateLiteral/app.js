const name = "Eray Kısabacak";
const department = "Bilişim";
const salary = 2000;

//const a = "İsim : " + name + "\n" + "Departman : " + department + "\n" + "Maaş : " + salary;

//const a = `İsim : ${name}\nDepartmant : ${department}\nMaaş : ${salary}`;

//const html = "<ul>" + 
//            "<li>" + name + "</li>" + 
//            "<li>" + department + "</li>" +
//            "<li>" + salary + "</li>" +
//            "</ul>";

const html = `
            <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
            </ul>


            `


document.body.innerHTML = html;


