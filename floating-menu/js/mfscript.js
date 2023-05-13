        // setting of menu height and width
        let menuHeight   = "300px";
        let menuWidth    = "20%";
        let menuSide     = "right";
        let menuTop      = "50px";
        let menuHorDist  = "10px";
        let menuVerDist  = "20px";
        let menuColor    = "#555555";

        let actualHeight = 0;
        let fc           = document.getElementById("floating-content");
        let menuFixed    = document.getElementById("menu-fixed");
        let menuShadow   = document.getElementById("menu-shadow");

        window.addEventListener('load', initiateMenu);
        window.addEventListener('resize', initiateMenu);
        window.addEventListener('scroll', scrollContent)

        function initiateMenu() {
            // setting of menu fixed height, width and position
            menuFixed.style.height = menuHeight;
            menuFixed.style.width = menuWidth; 
            menuFixed.style.top = "calc(" + menuShadow.getBoundingClientRect().top + "px + " + menuTop + ")"; 
            if (menuSide == "right") {
                menuFixed.style.right = "0px";
            } else {
                menuFixed.style.left = "0px";
            }
            menuFixed.style.backgroundColor = menuColor; 

            // setting of menu shadow height and width
            menuShadow.style.float  = menuSide;
            menuShadow.style.width  = "calc(" + menuWidth + " + " + menuHorDist + ")";
            
            actualHeight = Math.max(fc.scrollHeight, fc.offsetHeight, fc.clientHeight);

            let topInset = parseInt(menuTop) - parseInt(menuVerDist);
            let bottomInset = actualHeight - parseInt(menuHeight) - parseInt(menuTop) - parseInt(menuVerDist);
            let parameterInset = topInset + "px 0px " + bottomInset + "px 0px";
            menuShadow.style.shapeOutside = "inset(" + parameterInset + ")";
            menuShadow.style.height = actualHeight + "px";            
        }

        function scrollContent() {
            
            let topInset = Math.round(window.pageYOffset) + parseInt(menuTop) - parseInt(menuVerDist);
            let bottomInset = actualHeight - parseInt(menuHeight) - Math.round(window.pageYOffset) - parseInt(menuTop) - parseInt(menuVerDist);
            let parameterInset = topInset + "px 0px " + bottomInset + "px 0px";
            document.getElementById("menu-shadow").style.shapeOutside = "inset(" + parameterInset + ")";                 
        }
