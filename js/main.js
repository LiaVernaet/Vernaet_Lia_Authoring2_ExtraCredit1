(() => {
     //variable stack first

     ///must link classdata to HTML. Anything underneath has access (main.js)
     const courseInfo = document.querySelector('.profPanelText').querySelectorAll('p') //get all paragraph tags in element
     const headerInfo = document.querySelector('.mainHead').querySelectorAll('img')
     const topInfo = document.querySelector('#topImg').querySelectorAll('img')

     //write functions in the middle
     function setCourseInfo(data) {
         courseInfo[0].textContent = data.coursename;
         courseInfo[0].innerHTML += ` - <span class="text-primary">${data.coursecode}</span>`;

         //add the prof name
         courseInfo[1].textContent = `Professor: ${data.profname}`;

         //add prof image
         document.querySelectorAll('.profileImg')[1].src = `images/${data.profimg}`;

         //add the times
         data.classtime.forEach(time => {
             let newTime = `<li><span class="fa fa-clock-o">${time}</span></li>`;
             courseInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
         })

     }

     function setHeaderInfo(headerData) {
        //add prof image
        document.querySelectorAll('.clLogo')[0].src = `images/${headerData.headerImg}`;
    }

    function setTopInfo(topPanelData) {
        //add prof image
        document.querySelectorAll('#topImg')[0].src = `images/${topPanelData.bannerImg}`;
    }

     function getData() {
         fetch('admin/connect.php') //run a DB query
         .then (res => res.json()) //parse to json
         .then(data => {
             setCourseInfo(data[0]);
         })
         .catch(function(error) {
             console.log(error);
         });
     }
     function getHeaderData() {
        fetch('admin/connect.php') //run a DB query
        .then (res => res.json()) //parse to json
        .then(headerData => {
            setCourseInfo(headerData[0]);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    function getTopData() {
        fetch('admin/connect.php') //run a DB query
        .then (res => res.json()) //parse to json
        .then(topPanelData => {
            setCourseInfo(topPanelData[0]);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

     //call the setCourseInfo function
      setCourseInfo(classData);
      setHeaderInfo(headerData);
      setTopInfo(topPanelData);
    getData();
    getHeaderData();
    getTopData();


})();