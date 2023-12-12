let light = true;

function toggleTheme() {
    if (light) {
        document.getElementsByClassName('head')[0].style.backgroundColor = 'black';
        document.getElementsByClassName('head')[0].style.color = 'white';




        let viewportWidth = window.innerWidth;
        if (viewportWidth > 700) {
            let navLinks = document.querySelectorAll(".navbar a");

            navLinks.forEach(function (navLink) {
                if (navLink.style.color !== 'white') {
                    navLink.style.color = 'white';
                }
            });

            document.getElementsByClassName('navbar')[0].style.backgroundColor = 'transparent';


        }
        else {
            document.getElementsByClassName('navbar')[0].style.backgroundColor = 'rgb(2, 45, 59)';

        }


        document.body.style.backgroundColor = '#333';

        document.body.style.backgroundColor = '#303030';
        let ptemp = document.querySelectorAll(".txt p");
        ptemp.forEach(function (navLink) {
            navLink.style.color = 'white';
        });
        light = false



    }


    else {
        document.getElementsByClassName('head')[0].style.backgroundColor = 'lightblue';
        document.getElementsByClassName('head')[0].style.color = 'black';

        let viewportWidth = window.innerWidth;




        if (viewportWidth > 700) {
            let navLinks = document.querySelectorAll(".navbar a");

            navLinks.forEach(function (navLink) {
                if (navLink.style.color !== 'rgb(8, 104, 136)') {
                    navLink.style.color = 'rgb(8, 104, 136)';
                }

            });
            document.getElementsByClassName('navbar')[0].style.backgroundColor = 'transparent';

        }
        else {
            document.getElementsByClassName('navbar')[0].style.backgroundColor = 'rgb(8, 104, 136)';

        }
        document.body.style.backgroundColor = 'white';
        let ptemp = document.querySelectorAll(".txt p");
        ptemp.forEach(function (navLink) {
            navLink.style.color = 'black';
        });

        light = true

        


    }


}


// toggleTheme()