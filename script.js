//your JS code here. If required.
const btn = document.querySelector("input");
btn.addEventListener("click", solve);
function solve(event){
				const select = document.getElementById("colorSelect");
				let selectedValue = select.value;
				let options = select.children;
				for(let i=0; i<options.length; i++){
					if(options[i].value === selectedValue){
						options[i].remove();
						break;
					}
				}
			}