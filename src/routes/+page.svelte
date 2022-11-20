<script>
	// @ts-nocheck
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	let current = 0;

	const strokeColor = ['#00a0e9', '#e900a0', '#ffb829', '#a000e9', '#00e9a0'];

	const shapes = [
		{
			points:
				'400 35, 470 105, 532 167, 586 221, 641 276, 700 335, 741 294, 807 228, 861 174, 930 105, 1000 35, 1049 141, 1113 278, 1176 413, 1246 565, 1325 735, 1264 683, 1185 617, 1120 562, 1065 515, 1000 460, 937 486, 873 513, 806 541, 755 562, 700 585, 638 559, 567 530, 446 479, 510 506, 400 460, 353 500, 294 549, 240 595, 164 660, 75 735, 141 593, 216 432, 277 299, 342 161',
			scaleX: 0.5,
			scaleY: 0.5,
			rotate: 0,
			tx: 700,
			ty: 0,
			fill: {
				color: 'none',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				points: {
					duration: 500,
					easing: 'easeOutExpo'
				},
				svg: {
					duration: 1500,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			points:
				'700 0, 740 62, 783 129, 851 102, 926 74, 922 148, 918 227, 989 246, 1066 266, 1017 327, 970 385, 1010 435, 1066 504, 995 523, 918 543, 922 620, 926 696, 848 666, 783 641, 744 703, 700 770, 655 701, 617 641, 551 667, 474 696, 478 624, 482 543, 418 526, 334 504, 380 448, 431 385, 384 328, 334 266, 408 246, 482 227, 478 158, 474 74, 538 98, 617 129, 658 65',
			scaleX: 1,
			scaleY: 1,
			rotate: 135,
			tx: -375,
			ty: 0,
			fill: {
				color: 'none',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				points: {
					duration: 500,
					easing: 'easeOutExpo'
				},
				svg: {
					duration: 1500,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			points:
				'700 0, 729 59, 764 129, 796 194, 825 253, 885 262, 958 273, 1024 282, 1105 294, 1036 362, 980 416, 942 453, 902 491, 912 547, 926 628, 938 701, 950 770, 875 731, 815 699, 755 667, 700 638, 636 672, 584 700, 514 736, 450 770, 461 703, 475 626, 487 554, 498 491, 438 433, 398 394, 343 341, 295 294, 367 284, 441 273, 502 264, 575 253, 608 187, 636 129, 670 61',
			scaleX: 0.5,
			scaleY: 0.5,
			rotate: 0,
			tx: 0,
			ty: 0,
			fill: {
				color: 'none',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				points: {
					duration: 500,
					easing: 'easeOutExpo'
				},
				svg: {
					duration: 1500,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			points:
				'315 0, 392 0, 469 0, 546 0, 623 0, 700 0, 777 0, 854 0, 931 0, 1008 0, 1085 0, 1085 77, 1085 154, 1085 231, 1085 308, 1085 385, 1085 462, 1085 539, 1085 616, 1085 693, 1085 770, 1008 770, 931 770, 854 770, 777 770, 700 770, 623 770, 546 770, 469 770, 392 770, 315 770, 315 693, 315 616, 315 539, 315 462, 315 385, 315 308, 315 231, 315 154, 315 77',
			scaleX: 0.5,
			scaleY: 0.5,
			rotate: 0,
			tx: 0,
			ty: 0,
			fill: {
				color: 'none',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				points: {
					duration: 500,
					easing: 'easeOutExpo'
				},
				svg: {
					duration: 1500,
					easing: 'easeOutElastic'
				}
			}
		},
		{
			points:
				'224 150, 312 110, 370 130, 370 157, 450 177, 480 144, 501 64, 582 110, 589 144, 633 164, 698 150, 742 177, 764 197, 895 177, 924 137, 975 144, 997 144, 983 210, 990 250, 1005 244, 1041 224, 1107 284, 1070 284, 1034 304, 1012 350, 924 410, 888 390, 873 410, 895 457, 815 530, 742 537, 662 577, 545 524, 392 510, 363 430, 297 384, 232 364, 246 290, 173 190, 173 157',
			scaleX: 1,
			scaleY: 1,
			rotate: 0,
			tx: 60,
			ty: 80,
			fill: {
				color: 'none',
				duration: 500,
				easing: 'linear'
			},
			animation: {
				points: {
					duration: 500,
					easing: 'easeOutExpo'
				},
				svg: {
					duration: 1500,
					easing: 'easeOutElastic'
				}
			}
		}
	];

	const DOM = {};

	const onEnter = (pos) => {
		current = pos;
		anime.remove(DOM.shapeEl);
		anime({
			targets: DOM.shapeEl,
			duration: shapes[pos].animation.points.duration,
			easing: shapes[pos].animation.points.easing,
			elasticity: shapes[pos].animation.points.elasticity || 0,
			points: shapes[pos].points,
			fill: {
				value: shapes[pos].fill.color,
				duration: shapes[pos].fill.duration,
				easing: shapes[pos].fill.easing
			}
		});
		anime.remove(DOM.svg);
		anime({
			targets: DOM.svg,
			duration: shapes[pos].animation.svg.duration,
			easing: 'easeOutQuint',
			elasticity: shapes[pos].animation.svg.elasticity || 0,
			scaleX: shapes[pos].scaleX,
			scaleY: shapes[pos].scaleY,
			translateX: shapes[pos].tx + 'px',
			translateY: shapes[pos].ty + 'px',
			rotate: shapes[pos].rotate + 'deg'
		});
	};

	onMount(() => {
		DOM.svg = document.querySelector('.morph');
		DOM.shapeEl = DOM.svg.querySelector('polygon.shape');
		const initShapeEl = function () {
			anime.remove(DOM.svg);
			anime({
				targets: DOM.svg,
				duration: 1,
				easing: 'linear',
				scaleX: shapes[0].scaleX,
				scaleY: shapes[0].scaleY,
				translateX: shapes[0].tx + 'px',
				translateY: shapes[0].ty + 'px',
				rotate: shapes[0].rotate + 'deg'
			});
		};
		initShapeEl();

		document.addEventListener('mousemove', parallax);
		const elem = document.querySelector('.background');
		// Magic happens here
		function parallax(e) {
			let _w = window.innerWidth / 2;
			let _h = window.innerHeight / 2;
			let _mouseX = e.clientX;
			let _mouseY = e.clientY;
			let _depth = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
			let x = `${_depth}`;
			elem.style.backgroundPosition = x;
		}
	});
</script>

<main class="min-h-screen relative ">
	<div class="background fixed top-0 bottom-0 left-0 right-0 z-0" />
	<div class="noise fixed top-0 bottom-0 left-0 right-0 z-10" />
	<div class="morph-wrap z-0 fixed top-0 left-0 right-0 bottom-0 flex justify-center align-middle">
		<svg
			class="morph h-full relative transition-colors"
			width="1400"
			height="770"
			viewBox="0 0 1400 770"
			style="stroke: {strokeColor[current] || strokeColor[0]}"
		>
			{#if current === 0}
				<g>
					<line x1="400" y1="35" x2="400" y2="425" />
					<line x1="700" y1="335" x2="700" y2="550" />
					<line x1="1000" y1="35" x2="1000" y2="425" />
					<line x1="400" y1="460" x2="700" y2="335" />
					<line x1="1000" y1="460" x2="700" y2="335" />
					<circle
						cx="400"
						cy="35"
						r="40"
						fill={strokeColor[current] || strokeColor[0]}
						stroke="none"
					/>
					<circle
						cx="700"
						cy="335"
						r="40"
						fill={strokeColor[current] || strokeColor[0]}
						stroke="none"
					/>
					<circle
						cx="1000"
						cy="35"
						r="40"
						fill={strokeColor[current] || strokeColor[0]}
						stroke="none"
					/>
					<circle
						cx="1325"
						cy="735"
						r="40"
						fill={strokeColor[current] || strokeColor[0]}
						stroke="none"
					/>
					<circle
						cx="1000"
						cy="460"
						r="40"
						fill={strokeColor[current] || strokeColor[0]}
						stroke="none"
					/>
					<circle
						cx="700"
						cy="585"
						r="40"
						fill={strokeColor[current] || strokeColor[0]}
						stroke="none"
					/>
					<circle
						cx="400"
						cy="460"
						r="40"
						fill={strokeColor[current] || strokeColor[0]}
						stroke="none"
					/>
					<circle
						cx="75"
						cy="735"
						r="40"
						fill={strokeColor[current] || strokeColor[0]}
						stroke="none"
					/>
				</g>
			{/if}
			<polygon class="shape" points={shapes[0].points} />
		</svg>
	</div>
	<div class="container relative z-20 mx-auto">
		<section
			class="min-h-screen flex flex-col justify-center"
			use:inview={{ threshold: 0.5 }}
			on:enter={() => onEnter(0)}
		>
			<div class="text-9xl font-bold leading-none w-1/2">Mirai Technologies.</div>
			<div class="text-2xl text-blue-500 uppercase font-bold mt-12 w-1/2">
				We help companies with problem-solving.
			</div>
		</section>
		<section
			class="min-h-screen  flex flex-col justify-center"
			use:inview={{ threshold: 0.5 }}
			on:enter={() => onEnter(1)}
		>
			<div class="text-8xl text-right">My World</div>
		</section>
		<section
			class="min-h-screen flex flex-col justify-center"
			use:inview={{ threshold: 0.5 }}
			on:enter={() => onEnter(2)}
		>
			<div class="text-9xl">Team</div>
		</section>
		<section
			class="min-h-screen flex flex-col justify-center"
			use:inview={{ threshold: 0.5 }}
			on:enter={() => onEnter(3)}
		>
			<div class="text-9xl">Team</div>
		</section>
		<section
			class="min-h-screen flex flex-col justify-center text-center"
			use:inview={{ threshold: 0.5 }}
			on:enter={() => onEnter(4)}
		>
			<div class="text-8xl font-bold">Contact us</div>
			<div class="mt-10">location and email</div>
		</section>
	</div>
</main>

<style>
	.background {
		background-image: url('/images/background.svg');
		background-repeat: repeat;
		background-position: center;
		background-position: 50% 50%;
		background-size: 65%;
	}
	.noise {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
		background-repeat: repeat;
	}
	.morph {
		fill: none;
		stroke-width: 24px;
		/* opacity: 0.5; */
	}
</style>
