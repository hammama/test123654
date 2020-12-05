const allCross = document.querySelectorAll('.visible-panel img');

console.log(allCross);


allCross.forEach(element => {

	element.addEventListener('click', function(){
		const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

		//console.log(this.src);

		if(this.src.includes('plus')){
			this.src = '/app/assets/moins.png';
			gsap.to(currentChoice, {duration: 0.2, height: height + 40, opacity: 1, padding: '20px 15px'})
		}
		else if (this.src.includes('moins'))
		{
		this.src = '/app/assets/plus.png';	
		 gsap.to(currentChoice, {duration: 0.2, height: 0, opacity: 0, padding: '0px 15px'})
		}

	})
})
