<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import gsap from 'gsap';
	import { _, locale } from 'svelte-i18n';
	import { onMount } from 'svelte';

	// Get product parameter from URL
	let productKey = '';
	let product = null;
	let isAnimating = false;

	// Define product keys that match our JSON structure
	const productKeys = [
		'asphalt_finisher',
		'automated_forklift',
		'digital_twin',
		'ai_workplace_assistants',
		'document_insights'
	];

	// Define image paths for each product
	const productImages = {
		asphalt_finisher: '/images/products/asphalt_finisher.jpg',
		automated_forklift: '/images/products/Automated_guided_forklift.webp',
		digital_twin: '/images/products/AI_digitaltwin.webp',
		ai_workplace_assistants: '/images/products/AI_agent.png',
		document_insights: '/images/products/ttdcup.jpg'
	};

	// Reactive products array that updates when locale changes
	$: products = productKeys.map((key) => ({
		key,
		name: `product_solution.products.${key}.name`,
		brief: `product_solution.products.${key}.brief`,
		detail: `product_solution.products.${key}.detail`,
		image: productImages[key]
	}));

	// Extract key features from product details
	$: productFeatures = product ? extractFeatures($_(product.detail)) : [];

	// Function to create a title from feature text
	function createFeatureTitle(featureText) {
		// Extract the first meaningful part before any comma or dash
		let title = featureText.split(/[,–-]/)[0].trim();

		// If it's too long, try to find a shorter meaningful part
		if (title.length > 50) {
			// Look for key words and create a shorter title
			const words = title.split(' ');
			if (words.length > 6) {
				// Take first 4-6 words that seem meaningful
				title = words.slice(0, 6).join(' ');
			}
		}

		// Capitalize first letter
		return title.charAt(0).toUpperCase() + title.slice(1);
	}

	$: if (browser) {
		productKey = $page.params.product;
		product = products.find((p) => p.key === productKey);
	}

	// Function to extract key features from product details
	function extractFeatures(detailText) {
		if (!detailText) return [];

		const features = [];

		// First, try to extract from HTML content (like the automated_forklift product)
		const htmlMatches = detailText.match(/<strong>•\s*([^<]+):<\/strong>\s*([^<]+)/g);
		if (htmlMatches) {
			htmlMatches.forEach((match) => {
				const titleMatch = match.match(/<strong>•\s*([^<]+):<\/strong>/);
				const descMatch = match.match(/<\/strong>\s*([^<]+)/);
				if (titleMatch && descMatch) {
					const title = titleMatch[1].trim();
					const description = descMatch[1].trim();
					if (title && description && description.length > 10 && description.length < 200) {
						features.push({ title, description });
					}
				}
			});
		}

		// If we found HTML features, return them
		if (features.length > 0) {
			return features.slice(0, 4);
		}

		// Otherwise, look for bullet points or key features in the text
		const lines = detailText.split('\n').filter((line) => line.trim());

		for (const line of lines) {
			const trimmedLine = line.trim();

			// Look for lines that start with bullet points or contain key feature indicators
			if (
				trimmedLine.match(/^[•\-\*]\s*(.+)/) ||
				trimmedLine.match(/^[A-Z][^–]+–\s*(.+)/) ||
				trimmedLine.match(/^[A-Z][^:]+:\s*(.+)/) ||
				trimmedLine.includes('•') ||
				trimmedLine.includes('–') ||
				trimmedLine.includes(':')
			) {
				// Check if this line has a title-description format (like "Title – Description")
				if (trimmedLine.includes('–')) {
					const parts = trimmedLine.split('–');
					if (parts.length === 2) {
						const title = parts[0].trim();
						const description = parts[1].trim();
						if (title && description && description.length > 10 && description.length < 200) {
							features.push({ title, description });
						}
					}
				} else {
					// Clean up the feature text for other formats
					let featureText = trimmedLine
						.replace(/^[•\-\*]\s*/, '')
						.replace(/^[A-Z][^–]+–\s*/, '')
						.replace(/^[A-Z][^:]+:\s*/, '')
						.replace(/<[^>]*>/g, '') // Remove HTML tags
						.trim();

					if (featureText && featureText.length > 10 && featureText.length < 200) {
						// Create a simple title from the first part
						const title = createFeatureTitle(featureText);
						features.push({ title, description: featureText });
					}
				}
			}
		}

		// If no specific features found, create generic ones based on product type
		if (features.length === 0) {
			return getDefaultFeatures(productKey);
		}

		// Return up to 4 features
		return features.slice(0, 4);
	}

	// Default features with proper titles based on product content
	function getDefaultFeatures(key) {
		const defaultFeatures = {
			asphalt_finisher: [
				{
					title: 'Precision Detection',
					description: 'AI-powered precision detection for accurate road identification'
				},
				{
					title: 'Optimized Finishing',
					description: 'Intelligent automation that enhances quality and efficiency'
				},
				{
					title: 'Cost-Effective Solutions',
					description:
						'Reduce material waste and minimize operational costs with data-driven decision-making'
				},
				{
					title: 'Enhanced Safety',
					description: 'Make roadwork faster, safer, and more efficient with smart solutions'
				}
			],
			automated_forklift: [
				{
					title: 'Autonomous Navigation',
					description: 'Uses sensors, cameras, and LiDAR for seamless, human-free movement'
				},
				{
					title: 'Precision & Accuracy',
					description: 'AI-driven route optimization ensures timely, precise transport'
				},
				{
					title: 'Safety & Reliability',
					description: 'Obstacle detection and collision avoidance enhance safety'
				},
				{
					title: 'Seamless Integration',
					description: 'Works with WMS and MES for real-time monitoring'
				}
			],
			digital_twin: [
				{
					title: 'Real-Time Data Integration',
					description:
						'Integrate real-time data, predictive analytics, and automation for optimized operations'
				},
				{
					title: 'AI-Driven Insights',
					description:
						'Transform decision-making through AI-driven insights and actionable intelligence'
				},
				{
					title: 'Cross-Industry Applications',
					description: 'Expertise spans manufacturing, logistics, and smart infrastructure'
				},
				{
					title: 'Unprecedented Accuracy',
					description: 'Visualize, simulate, and refine complex systems with unprecedented accuracy'
				}
			],
			ai_workplace_assistants: [
				{
					title: 'LLM-Powered Agents',
					description:
						'Build agents based on company-specific data using state-of-the-art Large Language Models'
				},
				{
					title: 'Multi-Format Processing',
					description: 'Process various data formats including images, texts, and videos'
				},
				{
					title: 'Ultimate Data Protection',
					description: 'Ensure safe and secure LLM agents with strong data protection measures'
				},
				{
					title: 'Graph RAG Integration',
					description:
						'Efficient information retrieval for long-context data using Graph Retrieval Augmented Generation'
				}
			],
			document_insights: [
				{
					title: 'Advanced Cloud AI',
					description:
						'Leverage advanced cloud-based AI services and powerful LLM for document analysis'
				},
				{
					title: 'Intelligent Categorization',
					description:
						'Organize documents into user-defined categories with intelligent classification'
				},
				{
					title: 'Hidden Insights Discovery',
					description:
						'Uncover hidden insights and overlapping content that might otherwise go unnoticed'
				},
				{
					title: 'Custom Summarization',
					description:
						'Provide custom instructions for summarization to discover valuable, actionable intelligence'
				}
			]
		};

		return (
			defaultFeatures[key] || [
				{
					title: 'Cutting-Edge Technology',
					description: 'Cutting-edge AI technology'
				},
				{
					title: 'Enhanced Efficiency',
					description: 'Enhanced efficiency and productivity'
				},
				{
					title: 'Seamless Integration',
					description: 'Seamless integration capabilities'
				},
				{
					title: 'Data-Driven Insights',
					description: 'Data-driven insights and optimization'
				}
			]
		);
	}

	onMount(() => {
		if (product) {
			// Animate page load
			animatePageLoad();
		}
	});

	function animatePageLoad() {
		if (browser) {
			// Animate the page content
			const tl = gsap.timeline();

			// Animate hero section
			tl.fromTo(
				'.hero-content',
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }
			);

			// Animate product image
			tl.fromTo(
				'.product-image',
				{ opacity: 0, scale: 0.9 },
				{ opacity: 1, scale: 1, duration: 0.6, ease: 'expo.out' },
				'-=0.4'
			);

			// Animate text content
			tl.fromTo(
				'.product-text',
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' },
				'-=0.3'
			);

			// Animate content sections
			tl.fromTo(
				'.content-section',
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'expo.out' },
				'-=0.2'
			);

			// Animate product name with GSAP
			setTimeout(() => {
				gsap.fromTo(
					'#product-name',
					{ opacity: 0, y: 50, scale: 0.9 },
					{ opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'elastic.out' }
				);
			}, 500);
		}
	}

	function goBack() {
		if (browser && !isAnimating) {
			isAnimating = true;

			// Animate out
			gsap.to('.page-content', {
				opacity: 0,
				y: -50,
				scale: 0.95,
				duration: 0.5,
				ease: 'expo.in',
				onComplete: () => {
					goto('/#product-solution-section', { replaceState: true });
				}
			});
		}
	}

	function copyProductLink() {
		if (browser) {
			const url = `${window.location.origin}/products/${productKey}`;

			navigator.clipboard
				.writeText(url)
				.then(() => {
					// Show success feedback
					const button = document.getElementById('copy-button');
					const originalHTML = button.innerHTML;
					button.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
					Copied!
				`;
					button.classList.add('text-green-600');

					setTimeout(() => {
						button.innerHTML = originalHTML;
						button.classList.remove('text-green-600');
					}, 2000);
				})
				.catch((err) => {
					console.error('Failed to copy: ', err);
				});
		}
	}
</script>

<svelte:head>
	<title
		>{product ? `${$_(product.name)} - Mirai Technologies` : 'Product - Mirai Technologies'}</title
	>
	<meta
		name="description"
		content={product
			? `Learn more about ${$_(product.name)} - ${$_(product.brief)} at Mirai Technologies`
			: 'Product at Mirai Technologies'}
	/>
</svelte:head>

{#if product}
	<div class="page-content min-h-screen bg-gradient-to-br from-[#081336] to-[#1a2a4a]">
		<!-- Hero Section -->
		<div class="hero-content relative overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-r from-[#081336]/90 to-transparent z-10" />
			<div class="container mx-auto px-5 py-24 relative z-20">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<!-- Product Image -->
					<div class="product-image order-2 lg:order-1">
						<div class="w-full aspect-[16/9] overflow-hidden shadow-2xl rounded-3xl">
							<img
								src={product.image ? product.image : '/images/products/no_photo.jpg'}
								class="h-full w-full object-cover"
								alt={$_(product.name)}
							/>
						</div>
					</div>

					<!-- Product Info -->
					<div class="product-text order-1 lg:order-2 text-white">
						<h1 id="product-name" class="text-5xl md:text-7xl uppercase mb-4">
							<span class="font-bold">{$_(product.name)}</span>
						</h1>

						{#if product.brief}
							<p class="text-xl leading-relaxed mb-8 text-blue-300">
								{$_(product.brief)}
							</p>
						{/if}

						<!-- Action Buttons -->
						<div class="flex flex-col sm:flex-row gap-4">
							<button
								on:click={goBack}
								class="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 font-medium backdrop-blur-sm"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5 mr-2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
									/>
								</svg>
								Back to Products
							</button>

							<button
								id="copy-button"
								on:click={copyProductLink}
								class="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-medium"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5 mr-2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186Zm0-12.814a2.25 2.25 0 10-3.933-2.185 2.25 2.25 0 003.933 2.185Z"
									/>
								</svg>
								Share Product
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Content Section -->
		<div class="bg-white py-24">
			<div class="container mx-auto px-5">
				<div class="max-w-4xl mx-auto">
					{#if product.detail}
						<div class="content-section mb-12">
							<h3
								class="text-3xl uppercase font-bold text-[#081336] border-b-2 border-[#081336] mb-8"
							>
								Product Details
							</h3>
							<div class="prose prose-lg max-w-none">
								<div class="text-lg leading-relaxed text-gray-800">
									{@html $_(product.detail)}
								</div>
							</div>
						</div>
					{/if}

					<!-- Features Section -->
					{#if productFeatures.length > 0}
						<div class="content-section mb-12">
							<h3
								class="text-3xl uppercase font-bold text-[#081336] border-b-2 border-[#081336] mb-8"
							>
								Key Features
							</h3>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								{#each productFeatures as feature, index}
									<div
										class="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
									>
										<div class="flex items-center mb-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												class="w-6 h-6 text-blue-600 mr-3"
											>
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clip-rule="evenodd"
												/>
											</svg>
											<h4 class="text-xl font-semibold text-gray-900">
												{feature.title}
											</h4>
										</div>
										<p class="text-gray-700">
											{feature.description}
										</p>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Contact CTA -->
					<div class="content-section text-center">
						<div class="bg-gradient-to-r from-[#081336] to-[#1a2a4a] rounded-3xl p-12 text-white">
							<h3 class="text-3xl font-bold mb-4">Ready to Get Started?</h3>
							<p class="text-xl mb-8 text-gray-300">
								Contact us to learn more about this product and how it can benefit your business.
							</p>
							<a
								href="/#contact-section"
								class="inline-flex items-center px-8 py-4 bg-white text-[#081336] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
							>
								Get in Touch
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-5 h-5 ml-2"
								>
									<path
										fill-rule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<!-- Product not found -->
	<div
		class="min-h-screen bg-gradient-to-br from-[#081336] to-[#1a2a4a] flex items-center justify-center"
	>
		<div class="text-center text-white">
			<h1 class="text-6xl font-bold mb-4">404</h1>
			<p class="text-xl mb-8">Product not found</p>
			<button
				on:click={() => goto('/')}
				class="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 font-medium backdrop-blur-sm"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 mr-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
					/>
				</svg>
				Back to Home
			</button>
		</div>
	</div>
{/if}
