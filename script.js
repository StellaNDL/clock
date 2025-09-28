setInterval(function(){
            let showDate = document.getElementById
        ("showDate");
        let hours = document.getElementById
        ("hours");
        let minutes = document.getElementById
        ("minutes");
        let seconds = document.getElementById
        ("seconds");

        const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        let date = new Date();
        // getDate() - date
        // getMonth() - month no
        // getFullYear() - 4 digit year 2025
        // getHours()
        // getMinutes()
        // getSeconds()
        
        let displayDate = date.getDate() + " " + monthNames [date.getMonth()] + " " + date.getFullYear();
        showDate.innerHTML = displayDate

        let displayHours = date.getHours();
        let displayMinutes = date.getMinutes();
        let displaySeconds = date.getSeconds();

        displayHours = (displayHours < 10 ? "0" : "") + displayHours;
        displayMinutes = (displayMinutes < 10 ? "0" : "") + displayMinutes;
        displaySeconds = (displaySeconds < 10 ? "0" : "") + displaySeconds;

        hours.innerHTML = displayHours;
        minutes.innerHTML = displayMinutes;
        seconds.innerHTML = displaySeconds;
        }, 1000)
