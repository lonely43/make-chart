import ChartSystem from "./Chart.js"
const MyChart = new ChartSystem()

let id = 0

document.querySelector("#submit").addEventListener(
	"submit",
	(event) => {
		event.preventDefault()

		document.querySelector(".chart").style.display = "block"

		id++
		const vmax = document.querySelector("#speed").value
		const M = document.querySelector("#mass").value
		const T = document.querySelector("#temp").value

		MyChart.addChart(vmax, M, T, id)
	},
	false
)

// for mobile
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
if(vw <= 600){
	MyChart.changeAspectRation(1/1)
}