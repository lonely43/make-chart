var xValues = []
var yValues = []

genChart(0, 2000, 50)

new Chart("myChart", {
	type: "line",
	data: {
		labels: xValues,
		datasets: [
			{
				fill: false,
				pointRadius: 4,
				borderColor: "rgba(0, 0, 255, 0.5)",
				data: yValues
			}
		]
	},
	options: {
		plugins: {
			title: {
				display: true,
				text: "Распределение Максвелла-Больцмана",
				fontSize: 16
			}
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'V (м/с)' // Подпись для оси X
				}
			},
			y: {
				title: {
					display: true,
					text: 'F(x) (с / м)' // Подпись для оси Y
				},
            reverse: false
			}
		}
	}
});

function maksvelsChart(v) {
	const M = 0.032 // молекулярная масса воздуха в кг/моль
	const R = 8.314 // универсальная газовая постоянная в Дж/(моль·К)
	const T = 300 // температура в К

	const coefficient = Math.pow(M / (2 * Math.PI * R * T), 3 / 2)
	const exponential = Math.exp(-((M * Math.pow(v, 2)) / (2 * R * T)))
	return 4*Math.PI * coefficient * Math.pow(v, 2) * Math.E * exponential
}

function genChart(i1, i2, step = 1) {
	for (let x = i1; x <= i2; x += step) {
		yValues.push(maksvelsChart(x))
		xValues.push(x)
	}
}
