var currentTab = '';

function openChart(evt, chartName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    if(currentTab === chartName)
    {
        return; //Evitar replot do mesmo gráfico lul
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(chartName).style.display = "block";
    evt.currentTarget.className += " active";

    currentTab = chartName;

    SwitchChart(chartName);
}

function SwitchChart(chartName) {

    switch (chartName) {
        case "sunChartTab":
            {
                sunburstAll("sunburstChartTab");
            }
    }

}