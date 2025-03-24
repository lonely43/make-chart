export default class ChartSystem {
	constructor() {
		this.datasetsOptions = []
		this.MyChart = ""
	}

	createCharts(xValues) {
		if (this.MyChart !== "") {
			this.MyChart.destroy()
		}
      
		this.MyChart = new Chart("myChart", {
			type: "line",
			data: {
				labels: xValues,
				datasets: this.datasetsOptions
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
							text: "V (м/с)", // title for OX
							align: "end",
							color: "rgb(0, 0, 0)"
						}
					},
					y: {
						title: {
							display: true,
							text: "F(x) (м/c)", // title for OY
							align: "end",
							color: "rgb(0, 0, 0)"
						}
					}
				}
			}
		})
	}

	addChart(vmax, M, T, id) {
		let xValues = []
		let yValues = []
      const step = 50

      for (let x = 0; x <= vmax; x += step) {
         xValues.push(x)
         yValues.push(maksvelsChart(x, M, T))
      }

		let newChart = {
			id: id,
			label: String(id),
			data: yValues,
			borderColor: "rgba(247, 34, 34, 0.5)"
		}

		this.datasetsOptions.push(newChart)

		this.createCharts(xValues)
	}

	delChart() {
		// in future
	}
}

function maksvelsChart(v, M, T) {
   const R = 8.314
   const coefficient = Math.pow(M / (2 * Math.PI * R * T), 3/2)
   const exponential = Math.exp(-(M * Math.pow(v, 2)) / (2 * R * T))	

   let result = 4 * Math.PI * coefficient * Math.pow(v, 2) * exponential * 1000
   
   return result
}
