<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import anime from 'animejs';

	export let current = 0;
	$: {
		changeShape(current);
	}

	const colors = ['#00a0e9', '#a000e9', '#ffb829', '#00e9a0', '#e900a0'];

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
				'300 104, 300 144, 420 174, 464 123, 442 84, 495 6, 613 75, 624 124, 624 124, 689 154, 786 134, 883 203, 992 213, 1079 173, 1122 114, 1228 124, 1206 222, 1217 282, 1273 272, 1294 243, 1390 292, 1390 330, 1337 330, 1282 360, 1250 429, 1121 517, 1044 517, 1077 587, 959 695, 851 705, 732 764, 560 685, 334 665, 291 547, 97 449, 118 340, 10 192, 10 144, 85 134, 214 75',
			// '700 0, 729 59, 764 129, 796 194, 825 253, 885 262, 958 273, 1024 282, 1105 294, 1036 362, 980 416, 942 453, 902 491, 912 547, 926 628, 938 701, 950 770, 875 731, 815 699, 755 667, 700 638, 636 672, 584 700, 514 736, 450 770, 461 703, 475 626, 487 554, 498 491, 438 433, 398 394, 343 341, 295 294, 367 284, 441 273, 502 264, 575 253, 608 187, 636 129, 670 61',
			scaleX: 0.5,
			scaleY: 0.5,
			rotate: 0,
			tx: -700,
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
				// '700 0, 729 59, 764 129, 796 194, 825 253, 885 262, 958 273, 1024 282, 1105 294, 1036 362, 980 416, 942 453, 902 491, 912 547, 926 628, 938 701, 950 770, 875 731, 815 699, 755 667, 700 638, 636 672, 584 700, 514 736, 450 770, 461 703, 475 626, 487 554, 498 491, 438 433, 398 394, 343 341, 295 294, 367 284, 441 273, 502 264, 575 253, 608 187, 636 129, 670 61',
				// '315 0, 392 0, 469 0, 546 0, 623 0, 700 0, 777 0, 854 0, 931 0, 1008 0, 1085 0, 1085 77, 1085 154, 1085 231, 1085 308, 1085 385, 1085 462, 1085 539, 1085 616, 1085 693, 1085 770, 1008 770, 931 770, 854 770, 777 770, 700 770, 623 770, 546 770, 469 770, 392 770, 315 770, 315 693, 315 616, 315 539, 315 462, 315 385, 315 308, 315 231, 315 154, 315 77',
				'10 10, 183 10, 269 10, 355 10, 528 10, 614 10, 700 10, 786 10, 873 10, 1045 10, 1131 10, 1218 10, 1390 10, 1390 104, 1390 198, 1390 291, 1390 385, 1390 479, 1390 573, 1390 666, 1390 760, 1218 760, 1131 760, 1045 760, 873 760, 786 760, 700 760, 614 760, 528 760, 355 760, 269 760, 183 760, 10 760, 10 666, 10 573, 10 479, 10 385, 10 291, 10 198, 10 104',
			scaleX: 1,
			scaleY: 1,
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
				' 315 69, 352 38, 399 22, 474 12, 549 5, 624 1, 776 1, 852 6, 927 12, 1001 22, 1048 38, 1085 69, 1109 111, 1117 417, 1109 467, 1085 508, 1048 539, 1001 556, 966 560, 931 565, 896 568, 860 571, 860 621, 860 671, 860 720, 860 770, 817 726, 773 683, 730 639, 686 596, 676 588, 654 578, 642 577, 581 574, 459 564, 399 556, 315 508, 291 467, 283 417, 291 111',
			scaleX: 0.75,
			scaleY: 0.75,
			rotate: 0,
			tx: 350,
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
		}
	];
	// {
	// 	points:
	// 		'700 0, 740 62, 783 129, 851 102, 926 74, 922 148, 918 227, 989 246, 1066 266, 1017 327, 970 385, 1010 435, 1066 504, 995 523, 918 543, 922 620, 926 696, 848 666, 783 641, 744 703, 700 770, 655 701, 617 641, 551 667, 474 696, 478 624, 482 543, 418 526, 334 504, 380 448, 431 385, 384 328, 334 266, 408 246, 482 227, 478 158, 474 74, 538 98, 617 129, 658 65',
	// 	scaleX: 1,
	// 	scaleY: 1,
	// 	rotate: 135,
	// 	tx: -350,
	// 	ty: 0,
	// 	fill: {
	// 		color: 'none',
	// 		duration: 500,
	// 		easing: 'linear'
	// 	},
	// 	animation: {
	// 		points: {
	// 			duration: 500,
	// 			easing: 'easeOutExpo'
	// 		},
	// 		svg: {
	// 			duration: 1500,
	// 			easing: 'easeOutElastic'
	// 		}
	// 	}
	// },
	//HEART
	// {
	// 	points:
	// 		'1120 210, 1103 128, 1083 93, 1056 62, 986 17, 945 4, 901 0, 868 2, 807 21, 779 36, 755 54, 733 76, 700 128, 667 76, 645 54, 621 36, 593 21, 532 2, 499 0, 455 4, 414 17, 344 62, 317 93, 297 128, 280 210, 298 331, 346 440, 413 535, 490 616, 567 682, 634 730, 682 760, 700 770, 718 760, 766 730, 833 682, 910 616, 987 535, 1054 440, 1102 331, 1120 210',
	// 	scaleX: 1,
	// 	scaleY: 1,
	// 	rotate: 135,
	// 	tx: -350,
	// 	ty: 0,
	// 	fill: {
	// 		color: 'none',
	// 		duration: 500,
	// 		easing: 'linear'
	// 	},
	// 	animation: {
	// 		points: {
	// 			duration: 500,
	// 			easing: 'easeOutExpo'
	// 		},
	// 		svg: {
	// 			duration: 1500,
	// 			easing: 'easeOutElastic'
	// 		}
	// 	}
	// },

	const DOM = {};

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

	function changeShape(pos) {
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
	}
</script>

<div class="background fixed top-0 bottom-0 left-0 right-0 z-0" />
<div class="noise fixed top-0 bottom-0 left-0 right-0 z-10" />
<div class="morph-wrap z-0 fixed top-0 left-0 right-0 bottom-0 flex justify-center align-middle">
	<svg
		class="morph h-full relative transition-colors"
		width="1400"
		height="770"
		viewBox="0 0 1400 770"
		style="stroke: {colors[current] || colors[0]}"
	>
		{#if current === 0}
			<g>
				<line x1="400" y1="35" x2="400" y2="425" />
				<line x1="700" y1="335" x2="700" y2="550" />
				<line x1="1000" y1="35" x2="1000" y2="425" />
				<line x1="400" y1="460" x2="700" y2="335" />
				<line x1="1000" y1="460" x2="700" y2="335" />
				<circle cx="400" cy="35" r="40" fill={colors[current] || colors[0]} stroke="none" />
				<circle cx="700" cy="335" r="40" fill={colors[current] || colors[0]} stroke="none" />
				<circle cx="1000" cy="35" r="40" fill={colors[current] || colors[0]} stroke="none" />
				<circle cx="1325" cy="735" r="40" fill={colors[current] || colors[0]} stroke="none" />
				<circle cx="1000" cy="460" r="40" fill={colors[current] || colors[0]} stroke="none" />
				<circle cx="700" cy="585" r="40" fill={colors[current] || colors[0]} stroke="none" />
				<circle cx="400" cy="460" r="40" fill={colors[current] || colors[0]} stroke="none" />
				<circle cx="75" cy="735" r="40" fill={colors[current] || colors[0]} stroke="none" />
			</g>
		{/if}
		<polygon class="shape" points={shapes[0].points} />
	</svg>
</div>

<style scoped>
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
