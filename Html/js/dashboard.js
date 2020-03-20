// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

var drawChartTab01Loaded, drawChartTab02Loaded, drawChartTab03Loaded;

$(function () {
    drawChartTab01();

    $('.tab').tabs({
        activate: function (event, ui) {
            var activeTab;

            if (ui) {
                if (ui.newPanel.length > 0) {
                    activeTab = ui.newPanel[0].id;

                    if (activeTab == 'valTotalCorridas') {
                        drawChartTab02();
                    } else {
                        if (activeTab == 'valMedioCorrida') {
                            drawChartTab03();
                        }
                    }
                }
            }
        }
    });
});

function drawChartTab01() {
    if (!drawChartTab01Loaded) {
        google.charts.setOnLoadCallback(drawChart01);
        //drawChart01();
        google.charts.setOnLoadCallback(drawChart02);
        //drawChart02();
        google.charts.setOnLoadCallback(drawChart03);
        //drawChart03();
        drawChartTab01Loaded = true;
    }
};
function drawChartTab02() {
    if (!drawChartTab02Loaded) {
        google.charts.setOnLoadCallback(drawChart04);
        //drawChart04();
        google.charts.setOnLoadCallback(drawChart05);
        //drawChart05();
        google.charts.setOnLoadCallback(drawChart06);
        //drawChart06();
        drawChartTab02Loaded = true;
    }
};
function drawChartTab03() {
    if (!drawChartTab03Loaded) {
        google.charts.setOnLoadCallback(drawChart07);
        //drawChart07();
        google.charts.setOnLoadCallback(drawChart08);
        //drawChart08();
        google.charts.setOnLoadCallback(drawChart09);
        //drawChart09();
        drawChartTab03Loaded = true;
    }
};

//google.charts.setOnLoadCallback(drawChart01);
function drawChart01() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number');
    data.addRows([
        ['01/01/2019', 3],
        ['03/01/2019', 1],
        ['05/01/2019', 1],
        ['07/01/2019', 3],
        ['09/01/2019', 1],
        ['11/01/2019', 5]
    ]);

    // Set chart options
    var options = {
        backgroundColor: 'transparent',
        colors: ['#df4545'],
        width: '100%',
        height: 250,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: 'true'
        },
        chartArea: { width: '90%' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chartCorridasRealizadas'));
    chart.draw(data, options);
}
//google.charts.setOnLoadCallback(drawChart02);
function drawChart02() {
    var data = google.visualization.arrayToDataTable([
        ['centrodecusto', 'quantidade'],
        ['Direção', 5],
        ['Administração', 10],
        ['Desenvolvimento', 5]
    ]);

    var options = {
        title: 'TOP 5 - Centro de Custos',
        titlePosition: 'out',
        titleTextStyle: { fontSize: 14, color: '#32618e' },
        backgroundColor: 'transparent',
        width: '100%',
        height: 250,
        pieHole: 0.45,
        legend: { position: 'labeled', textStyle: { fontSize: 13 } },
        colors: ['#f7464a', '#46bfbd', '#fdb45c'],
        pieSliceTextStyle: { color: '#959595' },
        chartArea: { width: '80%' },
        pieSliceText: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chartCorridasRealizadasTop5Custos'));
    chart.draw(data, options);
}  
//google.charts.setOnLoadCallback(drawChart03);
function drawChart03() {
    var data = google.visualization.arrayToDataTable([
        ['colaboradores', 'quantidade'],
        ['Julia Oliveira', 9],
        ['Tadeu Pasquim', 4],
        ['Olivia Mourão', 3],
        ['João Costa', 6],
        ['Carla Mattos', 3]
    ]);

    var options = {
        title: 'TOP 5 - Colaboradores',
        titlePosition: 'out',
        titleTextStyle: { fontSize: 14, color: '#32618e' },
        backgroundColor: 'transparent',
        width: '100%',
        height: 250,
        pieHole: 0.45,
        legend: { position: 'labeled', textStyle: { fontSize: 13 } },
        colors: ['#112f41', '#068587', '#4fb99f', '#f2b134', '#f7464a'],
        pieSliceTextStyle: { color: '#959595' },
        chartArea: { width: '80%' },
        pieSliceText: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chartCorridasRealizadasTop5Colaboradores'));
    chart.draw(data, options);
}

//google.charts.setOnLoadCallback(drawChart04);
function drawChart04() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number');
    data.addRows([
        ['01/01/2019', 3],
        ['03/01/2019', 1],
        ['05/01/2019', 1],
        ['07/01/2019', 3],
        ['09/01/2019', 1],
        ['11/01/2019', 5]
    ]);

    // Set chart options
    var options = {
        backgroundColor: 'transparent',
        colors: ['#46bfbd'],
        width: '100%',
        height: 250,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: 'true'
        },
        chartArea: { width: '90%' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chartValorCorridas'));
    chart.draw(data, options);
}
//google.charts.setOnLoadCallback(drawChart05);
function drawChart05() {
    var data = google.visualization.arrayToDataTable([
        ['centrodecusto', 'quantidade'],
        ['Direção', 5],
        ['Administração', 10],
        ['Desenvolvimento', 5]
    ]);

    var options = {
        title: 'TOP 5 - Centro de Custos',
        titlePosition: 'out',
        titleTextStyle: { fontSize: 14, color: '#32618e' },
        backgroundColor: 'transparent',
        width: '100%',
        height: 250,
        pieHole: 0.45,
        legend: { position: 'labeled', textStyle: { fontSize: 13 } },
        colors: ['#068587', '#46bfbd', '#43dedb'],
        pieSliceTextStyle: { color: '#959595' },
        chartArea: { width: '80%' },
        pieSliceText: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chartValorCorridasTop5Custos'));
    chart.draw(data, options);
} 
//google.charts.setOnLoadCallback(drawChart06);
function drawChart06() {
    var data = google.visualization.arrayToDataTable([
        ['colaboradores', 'quantidade'],
        ['Julia Oliveira', 9],
        ['Tadeu Pasquim', 4],
        ['Olivia Mourão', 3],
        ['João Costa', 6],
        ['Carla Mattos', 3]
    ]);

    var options = {
        title: 'TOP 5 - Colaboradores',
        titlePosition: 'out',
        titleTextStyle: { fontSize: 14, color: '#32618e' },
        backgroundColor: 'transparent',
        width: '100%',
        height: 250,
        pieHole: 0.45,
        legend: { position: 'labeled', textStyle: { fontSize: 13 } },
        colors: ['#46bfbd', '#068587', '#92d8d9', '#43dedb', '#75f5f3'],
        pieSliceTextStyle: { color: '#959595' },
        chartArea: { width: '80%' },
        pieSliceText: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chartValorCorridasTop5Colaboradores'));
    chart.draw(data, options);
}

//google.charts.setOnLoadCallback(drawChart07);
function drawChart07() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number');
    data.addRows([
        ['01/10/2016', 10],
        ['03/10/2016', 1],
        ['05/10/2016', 1],
        ['07/10/2016', 3],
        ['09/10/2016', 1],
        ['11/10/2016', 5],
    ]);

    // Set chart options
    var options = {
        backgroundColor: 'transparent',
        colors: ['#f2b134'],
        width: '100%',
        height: 250,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: 'true'
        },
        chartArea: { width: '90%' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chartValorMedioCorridas'));
    chart.draw(data, options);
}
//google.charts.setOnLoadCallback(drawChart08);
function drawChart08() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number');
    data.addRows([
        ['01/10/2016', 10],
        ['03/10/2016', 1],
        ['05/10/2016', 1],
        ['07/10/2016', 3],
        ['09/10/2016', 1],
        ['11/10/2016', 5],
    ]);

    // Set chart options
    var options = {
        title: 'Top 5 - Centro de Custos',
        titlePosition: 'out',
        titleTextStyle: { fontSize: 14, color: '#32618e' },
        backgroundColor: 'transparent',
        colors: ['#df4545'],
        width: '100%',
        height: 200,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: 'true'
        },
        chartArea: { width: '80%' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chartValorMedioCorridasTop5Custos'));
    chart.draw(data, options);
}
//google.charts.setOnLoadCallback(drawChart09);
function drawChart09() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number');
    data.addRows([
        ['01/10/2016', 10],
        ['03/10/2016', 1],
        ['05/10/2016', 1],
        ['07/10/2016', 3],
        ['09/10/2016', 1],
        ['11/10/2016', 5],
    ]);

    // Set chart options
    var options = {
        title: 'Top 5 - Colaboradores',
        titlePosition: 'out',
        titleTextStyle: { fontSize: 14, color: '#32618e' },
        backgroundColor: 'transparent',
        colors: ['#112f41'],
        width: '100%',
        height: 200,
        legend: 'none',
        animation: {
            duration: 1000,
            easing: 'out',
            startup: 'true'
        },
        chartArea: { width: '80%' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chartValorMedioCorridasTop5Colaboradores'));
    chart.draw(data, options);
}