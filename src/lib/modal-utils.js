import { browser } from '$app/environment';
import { goto } from '$app/navigation';

/**
 * Modal utilities for handling URL-based modal opening and sharing
 */

/**
 * Creates a copy link function for sharing modals via URL
 * @param {string} paramName - The URL parameter name (e.g., 'product', 'member')
 * @param {string} itemKey - The unique key for the item (e.g., product key, member key)
 * @param {Function} showToast - Function to show toast notification
 * @returns {Function} Copy link function
 */
export function createCopyLinkFunction(paramName, itemKey, showToast) {
	return async function copyLink(event) {
		event.stopPropagation(); // Prevent modal from opening

		if (browser) {
			const url = `${window.location.origin}/?${paramName}=${itemKey}`;

			try {
				await navigator.clipboard.writeText(url);
				showToast();

				// Show success feedback
				const button = event.currentTarget;
				const originalHTML = button.innerHTML;
				button.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
				`;
				button.classList.add('text-green-400');

				setTimeout(() => {
					button.innerHTML = originalHTML;
					button.classList.remove('text-green-400');
				}, 2000);
			} catch (err) {
				console.error('Failed to copy: ', err);
				// Fallback for older browsers
				const textArea = document.createElement('textarea');
				textArea.value = url;
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand('copy');
				document.body.removeChild(textArea);

				showToast();

				setTimeout(() => {
					// Reset any success state
				}, 2000);
			}
		}
	};
}

/**
 * Creates a close modal function that handles URL parameter navigation
 * @param {string} paramName - The URL parameter name to check for
 * @param {string} sectionId - The section ID to scroll to when closing without URL param
 * @param {Function} setSelected - Function to reset selected state
 * @param {Function} setSelectedItem - Function to reset selected item state
 * @param {Function} setIsClosingModal - Function to set closing modal flag
 * @returns {Function} Close modal function
 */
export function createCloseModalFunction(
	paramName,
	sectionId,
	setSelected,
	setSelectedItem,
	setIsClosingModal
) {
	return function closeModal() {
		if (browser) {
			setIsClosingModal(true);

			// Check if modal was opened via URL parameter
			const urlParams = new URLSearchParams(window.location.search);
			const hasParam = urlParams.has(paramName);

			if (hasParam) {
				// Navigate to main domain and clear the parameter
				goto('/', { replaceState: true });
			} else {
				// Just close the modal
				setSelected(-1);
				if (setSelectedItem) {
					setSelectedItem(null);
				}
				// Scroll to section
				setTimeout(() => {
					const section = document.getElementById(sectionId);
					if (section) {
						section.scrollIntoView({ behavior: 'smooth' });
					}
				}, 100);
			}

			// Reset the flag after a longer delay to ensure navigation completes
			setTimeout(() => {
				setIsClosingModal(false);
			}, 500);
		}
	};
}

/**
 * Creates a URL parameter handler for opening modals
 * @param {string} paramName - The URL parameter name
 * @param {Array} items - Array of items to search through
 * @param {Function} getItemKey - Function to get the key from an item
 * @param {Function} showDetailFromUrl - Function to show modal from URL
 * @param {Function} setIsClosingModal - Function to set closing modal flag
 * @returns {Function} URL parameter handler
 */
export function createUrlParamHandler(
	paramName,
	items,
	getItemKey,
	showDetailFromUrl,
	setIsClosingModal
) {
	return function handleUrlParam(paramValue, selected, isClosingModal) {
		if (browser && paramValue && !isClosingModal) {
			// Double-check that the parameter still exists in the URL
			const urlParams = new URLSearchParams(window.location.search);
			const currentParam = urlParams.get(paramName);

			if (currentParam === paramValue) {
				const itemIndex = items.findIndex((item) => getItemKey(item) === paramValue);

				if (itemIndex !== -1 && selected === -1) {
					// Set flag to prevent reopening during navigation
					setIsClosingModal(true);
					showDetailFromUrl(itemIndex);
					// Reset flag after modal is opened
					setTimeout(() => {
						setIsClosingModal(false);
					}, 1000);
				}
			}
		}
	};
}

/**
 * Creates a toast notification system
 * @param {Function} setShowToast - Function to show/hide toast
 * @param {Function} setToastMessage - Function to set toast message
 * @returns {Object} Toast functions
 */
export function createToastSystem(setShowToast, setToastMessage) {
	return {
		showToast: (message = 'Link copied to clipboard!') => {
			setToastMessage(message);
			setShowToast(true);
			setTimeout(() => {
				setShowToast(false);
			}, 2000);
		}
	};
}
