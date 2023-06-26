const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".userResult img"),
cpuResult = document.querySelector(".cpuResult img"),
result = document.querySelector(".result"),
optionImg = document.querySelectorAll(".optionImg");
let name = prompt("Enter your name");

if (name === "" || name === null) {
	name = "You";
}

console.log(name)

optionImg.forEach((img, index) =>{
	img.addEventListener("click", (e)=>{
		img.classList.add("active");

		optionImg.forEach((img2, index2) =>{
			index !== index2 && img2.classList.remove("active");
		});

		let imgSrc = e.target.querySelector("img").src;
		userResult.src = imgSrc;

		let randomNum = Math.floor(Math.random() * 3);

		let cpuImg = ["images/scissors.png", "images/paper.png", "images/rock.png"];
		cpuResult.src = cpuImg[randomNum];

		let cpuValue = ["S", "P", "R"][randomNum];
		let userValue = ["S", "P", "R"][index];

		let outcomes = {
			SS: "Draw",
			SP: `${name}`,
			SR: "CPU",
			PS: "CPU",
			PP: "Draw",
			PR: `${name}`,
			RS: `${name}`,
			RP: "CPU",
			RR: "Draw"
		};

		let outcomeValue = outcomes[userValue + cpuValue];

		if (name === "You") {
			result.textContent = userValue === cpuValue ? "Match Draw!!" : `${outcomeValue} Win!!`;
		}else{
			result.textContent = userValue === cpuValue ? "Match Draw!!" : `${outcomeValue} Wins!!`;
		}
	});	
});