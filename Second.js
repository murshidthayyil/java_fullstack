function calculatedate_js()
{
        let inputdate=document.getElementById("start").value;
        let holiday=moment(document.getElementById("end").value).format("DD/MM/YYYY");
        let noDays=document.getElementById("no_days").value;
        let date1;
        let day;
        for ( let i=1 ;i<=noDays ; i++)
        {
            date1=moment(inputdate).add(i,'day').format("DD/MM/YYYY");
            if( holiday == date1 )
                {
                    noDays=parseInt(noDays)+1;
                    i++;
                }
            day=moment(inputdate).add(i,'day').format('dddd');
            if( day == "Saturday" || day == "Sunday" )
                noDays=parseInt(noDays)+1;                                      
        }
        let newdate=moment(inputdate).add(noDays,'day').format("DD/MM/YYYY");
        document.getElementById("output").value="Date: "+newdate+" , "+day;
}
function calculatedate_ajax()
{
    var xhttp = new XMLHttpRequest();
    let inputdate=document.getElementById("start").value;
    let holiday=document.getElementById("end").value);
    let no=document.getElementById("no_days").value;
    xhttp.onreadystatechange = function() {
    console.log(this);
    if (this.readyState == 4 && this.status == 200)
    {
        console.log(this.responseText)
    }
    };
    xhttp.open("GET", "senddatatoserver.java?inputdate="+ inputdate +"& holiday="+ holiday +"& no_days="+ no);
    xhttp.send();
}