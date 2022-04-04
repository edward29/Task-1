const out = {
    getSuccess(pet){
        if (pet) {
            return document.write(`<link rel="stylesheet" href="style.css"><link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><div class="el"><div class='card container col-sm-4 text-center '><div class="card-body"><h4>Entering switch block<br/>I own a ${pet}</h4></div></div></div>`);
        } else {
            return document.write(`<link rel="stylesheet" href="style.css"><link rel='stylesheet' href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><div class="el"><div class='card container col-sm-4 text-center '><div class="card-body"><h4>Entering switch block<br/>I don't own a pet</h4></div></div></div>`);
        }
    }
}

function myPet() {
    let pet = document.querySelector("#pet").value;

    if (pet === "") {
        const al = document.querySelector(".al");
        al.innerHTML = "<h5 class='msg'>Please enter your pet</h5>"
        al.style.display = "block";
        var msg = document.querySelector(".msg");
        setTimeout(() => msg.remove(), 3000);
        return false;
    }

    switch (pet.toLowerCase()) {
        case 'lizard':
            out.getSuccess(pet);
            break;
        case 'dog':
            out.getSuccess(pet);
            break;
        case 'cat':
            out.getSuccess(pet);
            break;
        case 'snake':
            out.getSuccess(pet);
            break;
        case 'parrot':
            out.getSuccess(pet);
            break;
        case 'spyder':
            out.getSuccess(pet);
            break;
        default:
            out.getSuccess();
    }
}