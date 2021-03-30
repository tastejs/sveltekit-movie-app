<script lang='ts'>
	import { afterUpdate } from 'svelte'
	export let progress:number
	let progress_percent:number
	let canvas:HTMLCanvasElement
	let pathcolour: string
	let blue:number
	let red:number
	let green:number
	let rgbcolour:string

  $: progress_percent = progress * 10
	$: pathcolour = '#2c2c2c';
	$: blue = 0;
	$: red = ( progress_percent<50 )? 255 : 255 -Math.floor((progress_percent - 50)* 2.55 *2)
	$: green = ( progress_percent > 50 )? 255 : Math.floor((progress_percent )* 2.55 * 2)
	$: rgbcolour ="rgb("+red+","+green+","+blue+")"
	
	afterUpdate(async () => {
			setCanvas(progress_percent)
	})


	function setCanvas(x:number) {
	  var context:CanvasRenderingContext2D = canvas.getContext('2d');
		var x=context.canvas.width/2;
		var y=context.canvas.height/2;
	  context.lineWidth=5;
		context.beginPath();
		context.arc(x,y,40,(Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
		context.strokeStyle=pathcolour;
		context.stroke();
		context.strokeStyle= rgbcolour;
		context.beginPath();
		context.arc(x,y,40,(Math.PI/180) * 270, (Math.PI/180) * (270 + progress_percent *3.6) );
		context.stroke();
}

</script>

<section id='progress' class='bg-gray-900 block rounded-full align-center relative w-24 h-24'>
	<div class='box'>
		<div class='percent'>
			<canvas class='w-24 h-24' bind:this={canvas} width="98" height="98"></canvas>
			<div class='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
				<h2 class='text-textLight font-semibold text-3xl'>{progress_percent}<span class='text-xl align-top'>%</span></h2>
			</div>
		</div>
	</div>
</section>