import ChartSystem from "./Chart.js"

const MyChart = new ChartSystem()
let id = 0
document.querySelector("#submit").addEventListener(
	"submit",
	(event) => {
		event.preventDefault()
		id++
		const vmax = document.querySelector("#speed").value
		const M = document.querySelector("#mass").value*10**-3
		const T = document.querySelector("#temp").value

		MyChart.addChart(vmax, M, T, id)
	},
	false
)
