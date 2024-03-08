window.onload = initAll
var submitted = false;

function initAll() {
    submitted = false;
    document.getElementById("job-application").addEventListener("submit", processInfo, false);
}

function processInfo(e)
{
    e.preventDefault();
    const data = new FormData(e.target);
    data.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    })
    submitted = true;
}

function convertToTable(){
    if(!submitted) {
        alert("Fill the Form First!");
        return false;
    }
    let f = document.getElementById("job-application");
    let t = document.getElementById("table-container");
    const data = new FormData(f);

    if(t.childNodes.length == 0) // if table doesn't exists
    {
        let dataTable = document.createElement('table');
        dataTable.id = "dataTable";
        t.appendChild(dataTable);
    }
    
    t = document.getElementById('dataTable'); // table

    if(t.childNodes.length == 0)
    {
        t.appendChild(document.createElement("tr")); // create a row
        let r = document.getElementsByTagName('tr')[0]; // get row
        data.forEach((item, idx) => {
            let header = document.createElement('th');
            console.log(idx);
            header.innerText = idx;
            r.appendChild(header);
        });
        t.appendChild(document.createElement("tr")); // create a row
        r = document.getElementsByTagName('tr')[1]; // get row
        data.forEach((item, idx) => {
            let header = document.createElement('td');
            header.innerText = item;
            header.setAttribute("head", idx);
            r.appendChild(header);
        });
    }
    else if(t.childNodes.length >= 1)
    {
        t.appendChild(document.createElement("tr")); // create a row
        let r = document.getElementsByTagName('tr'); // get row
        r = r[r.length - 1];
        data.forEach((item, idx) => {
            let header = document.createElement('td');
            header.innerText = item;
            header.setAttribute("head", idx);
            r.appendChild(header);
        });
    }

    //f.reset();
    //submitted = false;
}