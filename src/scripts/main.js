let MYCHART = ""

function createChart() {
	let xValues = []
	let yValues = []

	function genChart(i1, i2, step = 1) {
		function maksvelsChart(v, M, T) {
			const R = 8.314 // универсальная газовая постоянная в Дж/(моль·К)

			const coefficient = Math.pow(M / (2 * Math.PI * R * T), 3 / 2)
			const exponential = -Math.exp(1)*(M * Math.pow(v, 2)) / (2 * R * T)
			console.log(`${v}: ${4 * Math.PI * coefficient * Math.pow(v, 2) * Math.E * exponential}`)
			return (4 * Math.PI * coefficient * Math.pow(v, 2) * exponential)
		}

		for (let x = i1; x <= i2; x += step) {
			const M = document.querySelector("#mass").value*10**-3
			const T = document.querySelector("#temp").value

			yValues.push(maksvelsChart(x, M, T))
			xValues.push(x)
		}
	}

	genChart(0, document.querySelector("#speed").value, 50)
	
	if(MYCHART !== ""){
		MYCHART.destroy()
	}

	MYCHART = new Chart("myChart", {
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
					text: "Распределение Максвелла-Больцмана"
				},
				legend: {
					display: false
				}
			},
			scales: {
				x: {
					title: {
						display: true,
						text: "V (м/с)", // Подпись для оси X
						align: "end",
						color: "rgb(0, 0, 0)"
					}
				},
				y: {
					title: {
						display: true,
						text: "F(x) (с / м)", // Подпись для оси Y
						align: "end",
						color: "rgb(0, 0, 0)"
					}
				}
			}
		}
	})
}

document.querySelector("#submit").addEventListener(
	"submit",
	(event) => {
		event.preventDefault()
		createChart()
	},
	false
)
