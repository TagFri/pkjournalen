//Library of included calenders. Value is each calender-id from Google.
//If more than 23 calenders => update color variable with more values
const calenderIDs = [
    /* INTERNE KALENDRE */
    /* MF           */ "c_2051a90d8048c03d1e8737a35908fcc3c41ac4c90f417ca6d8dbc3a229720f4f@group.calendar.google.com",
    /* LIK Klatring */ "c_d6514d15f64d3d9af78da85c059a26fa07eb79b76e54cd88f2d386c5f07d472e@group.calendar.google.com",
    /* MSO          */ "c_b390de1204fabb156b7cada2ef7b65271e7949f7c774e32cd042190c2506ea30@group.calendar.google.com",
    /* MVL          */ "c_b08d176727bd77fc6403169ac89e220d2da24f3043371754387f92c5f3cc025d@group.calendar.google.com",
    /* MMO          */ "c_89cae8b5864fa7125af85206234d3f5f8f06df8387d7b752048a8f0f179fa199@group.calendar.google.com",
    /* LIK          */ "c_664793b600968a1e36ba9cdaf03917882cac24057772e9d7934353ff7b4e5d48@group.calendar.google.com",
    /* DD           */ "c_9b88431df7ae7198e2cb839a8c09cf7f7e3ab5438474f476cafb16830e472754@group.calendar.google.com",
    /* OAMS         */ "c_fc4894ab39af3f029e00684bee89a7f83c80fe44df2bd705a2ad1d0b3787256d@group.calendar.google.com",
    /* Ascapella    */ "c_bce3633a2f7469a709d6d7162fb0e65e2ab049035b06e1e058cba59f973838dc@group.calendar.google.com",
    /* Lucas        */ "c_e1133b222f57b034f0553391ab1002f352b2e27552cec6518b92ab09dbc458fd@group.calendar.google.com",
    /* SMI          */ "c_9d4905af5f339e086ed17346b88db6b67c5e1ca55f24a29a92a7960a82dba57a@group.calendar.google.com",
    /* SUG          */ "c_4d3ec10c69d2ff3c3d5ade1cb47726c3eb3d55220c3eb4331829a3f2d223bd6d@group.calendar.google.com",
    /* OCS          */ "c_f3721a7e0c8755d3c84ebdfdeb297f9f09215ffd166ad12fd24246218b886b8e@group.calendar.google.com",
    /* EKSTERNE KALENDERE */
    /* MPO          */ "hr.phormand@gmail.com"
]

//Color library to apply to each individual calendar:
const colors = ["#039BE5","#D81B60","#F6BF26","#E4C441","#4285F4","#D50000","#F09300","#7986CB","#795548","#F4511E","#F09300","#795548","#AD1457","#616161","#B39DDB","#9E69AF","#7CB342","#7CB342","#F4511E","#4285F4","#D50000","#A79B8E","#F4511E"]

//Size library for each desired calendar size
const size = {
    "small": [500, 300],
    "medium": [600, 500],
    "large": [600, 1000],
    "large_agenda": [600, 300] // Height = large
}

//Function to combine all calenders ID's and colors
function assembleCollection(calenderArray, colorArray) {
    let combinedCalenders = ""
    let combinedColors = ""
    //Add their uniq ID's and colors
    calenderArray.forEach( (calender, index) => {
        combinedCalenders += "&src="+calender
        combinedColors += "&color="+colorArray[index]
    })
    combinedCalenders += combinedColors
    return combinedCalenders
}

function createFrame(calenderURLs, height, width, type) {
    const iframe = document.createElement("iframe")
    iframe.src = "https://calendar.google.com/calendar/embed?height=" + height + "&wkst=2&ctz=Europe%2FOslo&showPrint=0&title=Trykk%20under%20for%20%C3%A5%20abonnere%20p%C3%A5%20%C3%B8nsket%20foreningers%20kalender&showTz=0&mode=" + type + calenderURLs
    iframe.style = "border-width:0"
    iframe.width = width
    iframe.height = height
    iframe.frameBorder = 0
    iframe.scrolling = "no"
    return iframe
}

//Large calendar
let largeCalender = createFrame(assembleCollection(calenderIDs, colors), size.large[0], size.large[1], "MONTH")
largeCalender.setAttribute("id", "calenderLarge")
//Medium calendar
let mediumCalender = createFrame(assembleCollection(calenderIDs, colors), size.medium[0], size.medium[1], "MONTH")
mediumCalender.setAttribute("id", "calenderMedium")
//Small calendar
let smallCalender = createFrame(assembleCollection(calenderIDs, colors), size.small[0], size.small[1], "AGENDA")
smallCalender.setAttribute("id", "calenderSmall")
//Append all calenders to HTML
document.getElementById("calenderLarge").appendChild(largeCalender)
document.getElementById("calenderMedium").appendChild(mediumCalender)
document.getElementById("calenderSmall").appendChild(smallCalender)