// Did not have time to make these 
// all unique and to not replicate code


var chart = new CanvasJS.Chart("chartContainer", {
    // title:{
    //   text: "A Multi-series Column Chart"
    // },  
    dataPointWidth: 8,
    axisX: {
        lineThickness: 0,
        tickThickness: 0,
        labelFontSize: 12,
    },
    axisY: {
        gridThickness: 0,
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    data: [{
        type: "column",
        color: "#ccbcdd",
        dataPoints: [
            { x: 0, y: 83, label: "Jan" },
            { x: 10, y: 67, label: "Feb" },
            { x: 20, y: 70, label: "Mar" },
            { x: 30, y: 73, label: "Apr" },
            { x: 40, y: 79, label: "May" },
            { x: 50, y: 84, label: "Jun" },
            { x: 60, y: 88, label: "Jul" }

        ]
    }, {
        type: "column",
        color: "#b6d8b9",
        dataPoints: [
            { x: 1, y: 88, label: "Jan" },
            { x: 11, y: 81, label: "Feb" },
            { x: 21, y: 93, label: "Mar" },
            { x: 31, y: 85, label: "Apr" },
            { x: 41, y: 86, label: "May" },
            { x: 51, y: 92, label: "Jun" },
            { x: 61, y: 99, label: "Jul" }
        ]
    }]
});

chart.render();
chart = {};


var chart2 = new CanvasJS.Chart("chartContainer2", {
    // title:{
    //   text: "A Multi-series Column Chart"
    // },  
    dataPointWidth: 8,
    axisX: {
        lineThickness: 0,
        tickThickness: 0,
        labelFontSize: 12,
    },
    axisY: {
        gridThickness: 0,
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    data: [{
        type: "column",
        color: "#ccbcdd",
        dataPoints: [
            { x: 0, y: 83, label: "Jan" },
            { x: 10, y: 67, label: "Feb" },
            { x: 20, y: 70, label: "Mar" },
            { x: 30, y: 73, label: "Apr" },
            { x: 40, y: 79, label: "May" },
            { x: 50, y: 84, label: "Jun" },
            { x: 60, y: 88, label: "Jul" }

        ]
    }, {
        type: "column",
        color: "#b6d8b9",
        dataPoints: [
            { x: 1, y: 88, label: "Jan" },
            { x: 11, y: 81, label: "Feb" },
            { x: 21, y: 93, label: "Mar" },
            { x: 31, y: 85, label: "Apr" },
            { x: 41, y: 86, label: "May" },
            { x: 51, y: 92, label: "Jun" },
            { x: 61, y: 99, label: "Jul" }
        ]
    }]
});

chart2.render();
chart2 = {};


var chart3 = new CanvasJS.Chart("chartContainer3", {
    // title:{
    //   text: "A Multi-series Column Chart"
    // },  
    dataPointWidth: 8,
    axisX: {
        lineThickness: 0,
        tickThickness: 0,
        labelFontSize: 12,
    },
    axisY: {
        gridThickness: 0,
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    data: [{
        type: "column",
        color: "#ccbcdd",
        dataPoints: [
            { x: 0, y: 83, label: "Jan" },
            { x: 10, y: 67, label: "Feb" },
            { x: 20, y: 70, label: "Mar" },
            { x: 30, y: 73, label: "Apr" },
            { x: 40, y: 79, label: "May" },
            { x: 50, y: 84, label: "Jun" },
            { x: 60, y: 88, label: "Jul" }

        ]
    }, {
        type: "column",
        color: "#b6d8b9",
        dataPoints: [
            { x: 1, y: 88, label: "Jan" },
            { x: 11, y: 81, label: "Feb" },
            { x: 21, y: 93, label: "Mar" },
            { x: 31, y: 85, label: "Apr" },
            { x: 41, y: 86, label: "May" },
            { x: 51, y: 92, label: "Jun" },
            { x: 61, y: 99, label: "Jul" }
        ]
    }]
});

chart3.render();
chart3 = {};





// canvasjs Spline Chart
var spline = new CanvasJS.Chart("splineContainer", {
    toolTip: {
        enabled: false,
    },
    backgroundColor: null,
    axisX: {
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    axisY: {
        gridThickness: 0,
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    data: [{
            type: "spline",
            lineThickness: 1,
            markerType: "none",
            color: "black",

            dataPoints: [
                { x: new Date(2015, 00, 1), y: 1352 },
                { x: new Date(2015, 01, 1), y: 1514 },
                { x: new Date(2015, 02, 1), y: 1321 },
                { x: new Date(2015, 03, 1), y: 1163 },
                { x: new Date(2015, 04, 1), y: 950 },
                { x: new Date(2015, 05, 1), y: 1201 },
                { x: new Date(2015, 06, 1), y: 1186 },
                { x: new Date(2015, 07, 1), y: 1281 },
                { x: new Date(2015, 08, 1), y: 1438 }
            ]
        }

    ]
});

spline.render();
spline = {};


var spline2 = new CanvasJS.Chart("2", {
    toolTip: {
        enabled: false,
    },
    backgroundColor: null,
    axisX: {
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    axisY: {
        gridThickness: 0,
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    data: [{
            type: "spline",
            lineThickness: 1,
            markerType: "none",
            color: "black",

            dataPoints: [
                { x: new Date(2015, 00, 1), y: 1352 },
                { x: new Date(2015, 01, 1), y: 1514 },
                { x: new Date(2015, 02, 1), y: 1321 },
                { x: new Date(2015, 03, 1), y: 1163 },
                { x: new Date(2015, 04, 1), y: 950 },
                { x: new Date(2015, 05, 1), y: 1201 },
                { x: new Date(2015, 06, 1), y: 1186 },
                { x: new Date(2015, 07, 1), y: 1281 },
                { x: new Date(2015, 08, 1), y: 1438 }
            ]
        }

    ]
});

spline2.render();
spline2 = {};



var spline3 = new CanvasJS.Chart("3", {
    toolTip: {
        enabled: false,
    },
    backgroundColor: null,
    axisX: {
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    axisY: {
        gridThickness: 0,
        lineThickness: 0,
        tickThickness: 0,
        valueFormatString: ' ',
    },
    data: [{
            type: "spline",
            lineThickness: 1,
            markerType: "none",
            color: "black",
            dataPoints: [
                { x: new Date(2015, 00, 1), y: 1352 },
                { x: new Date(2015, 01, 1), y: 1514 },
                { x: new Date(2015, 02, 1), y: 1321 },
                { x: new Date(2015, 03, 1), y: 1163 },
                { x: new Date(2015, 04, 1), y: 950 },
                { x: new Date(2015, 05, 1), y: 1201 },
                { x: new Date(2015, 06, 1), y: 1186 },
                { x: new Date(2015, 07, 1), y: 1281 },
                { x: new Date(2015, 08, 1), y: 1438 }
            ]
        }
    ]
});

spline3.render();
spline3 = {};

