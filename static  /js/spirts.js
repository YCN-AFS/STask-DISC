document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('allocationForm');
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');
    const allocationElement = document.getElementById('allocation');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading animation
        loading.classList.remove('hidden');
        result.classList.add('hidden');
        result.classList.remove('show');
        result.classList.add('hide');
        
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Send POST request to /allocate
            const response = await axios.post('/allocate', data);
            
            // Check if the response contains the allocation
            if (response.data && response.data.allocation) {
                // Update result
                allocationElement.textContent = response.data.allocation;
                
                // Hide loading, show result with animation
                loading.classList.add('hidden');
                result.classList.remove('hidden');
                setTimeout(() => {
                    result.classList.remove('hide');
                    result.classList.add('show');
                }, 10);
            } else {
                throw new Error('Allocation data not found in response');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while allocating the task. Please check the console for more details and try again.');
            loading.classList.add('hidden');
        }
    });

    // Add hover effect to form groups
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.addEventListener('mouseenter', () => {
            group.classList.add('hover:shadow-md');
        });
        group.addEventListener('mouseleave', () => {
            group.classList.remove('hover:shadow-md');
        });
    });
});