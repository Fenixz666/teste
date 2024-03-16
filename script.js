// Get all buttons
const buttons = document.querySelectorAll('.ability-button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove any existing tooltips
        document.querySelectorAll('.tooltip').forEach(el => el.remove());
        
        // Create a tooltip element
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = this.getAttribute('data-tooltip');

        // Append the tooltip element next to the clicked button
        this.parentNode.appendChild(tooltip);
    });
});
