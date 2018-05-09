function clicked(id) {

    btn = document.getElementById(id);

    btn.parentNode.removeChild(btn);
    let btn0 = document.createElement("button");
    let id0 = id + "0";
    let t0 = document.createTextNode(id0);
    btn0.appendChild(t0);
    btn0.setAttribute("id", id0);
    btn0.setAttribute("onclick", "clicked(this.id)");
    document.body.appendChild(btn0);


    let btn1 = document.createElement("button");
    let id1 = id + "1";
    let t1 = document.createTextNode(id1);
    btn1.appendChild(t1);
    btn1.setAttribute("id", id1);
    btn1.setAttribute("onclick", "clicked(this.id)");
    document.body.appendChild(btn1);

}