// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Carbon Footprint Calculator
document.getElementById('calculate-btn').addEventListener('click', function() {
    const farmSize = parseFloat(document.getElementById('farm-size').value) || 0;
    const livestock = parseInt(document.getElementById('livestock').value) || 0;
    const fuelUsage = parseFloat(document.getElementById('fuel-usage').value) || 0;
    
    // Simplified calculation (this would be more complex in a real application)
    const footprint = (farmSize * 0.5) + (livestock * 2.5) + (fuelUsage * 8.8);
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h4>Your Estimated Carbon Footprint:</h4>
        <p><strong>${footprint.toFixed(2)} kg CO2e per month</strong></p>
        <p>To reduce your footprint, consider:</p>
        <ul>
            <li>Implementing cover crops</li>
            <li>Reducing tillage</li>
            <li>Using renewable energy sources</li>
            <li>Improving manure management</li>
        </ul>
    `;
});

// Planting Calendar
document.getElementById('calendar-btn').addEventListener('click', function() {
    const region = document.getElementById('region').value;
    const crop = document.getElementById('crop').value;
    
    const cropNames = {
        'tomato': 'Tomatoes',
        'corn': 'Corn',
        'lettuce': 'Lettuce',
        'potato': 'Potatoes'
    };
    
    const regionNames = {
        'north': 'Northern Region',
        'south': 'Southern Region',
        'east': 'Eastern Region',
        'west': 'Western Region'
    };
    
    // Simplified planting dates based on region and crop
    const plantingDates = {
        'north': {
            'tomato': 'April 15 - May 15',
            'corn': 'May 1 - May 30',
            'lettuce': 'March 15 - April 15 & August 1 - September 1',
            'potato': 'April 1 - May 1'
        },
        'south': {
            'tomato': 'February 15 - March 30 & July 15 - August 15',
            'corn': 'March 1 - April 15',
            'lettuce': 'February 1 - March 15 & September 1 - October 15',
            'potato': 'February 15 - March 30'
        },
        'east': {
            'tomato': 'April 1 - May 1',
            'corn': 'April 15 - May 15',
            'lettuce': 'March 1 - April 1 & August 15 - September 15',
            'potato': 'March 15 - April 15'
        },
        'west': {
            'tomato': 'March 15 - April 30',
            'corn': 'April 1 - May 1',
            'lettuce': 'February 15 - March 30 & September 1 - October 1',
            'potato': 'March 1 - April 1'
        }
    };
    
    const dates = plantingDates[region][crop];
    const resultElement = document.getElementById('calendar-result');
    resultElement.innerHTML = `
        <h4>Planting Dates for ${cropNames[crop]} in ${regionNames[region]}:</h4>
        <p><strong>${dates}</strong></p>
        <p>Remember to adjust based on local weather conditions and soil temperature.</p>
    `;
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For this example, we'll just show a success message
    alert(Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.);
    
    // Reset the form
    document.getElementById('contactForm').reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// CTA Button Click
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#practices').scrollIntoView({
        behavior: 'smooth'
    });
});

// Resource Button Clicks
document.querySelectorAll('.resource-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.resource-card');
        const title = card.querySelector('h3').textContent;
        alert(Opening resource: ${title});
        // In a real application, this would navigate to the actual resource
    });
});

// Community Button Click
document.querySelector('.community-btn').addEventListener('click', function() {
    alert('Redirecting to community registration page...');
    // In a real application, this would navigate to the community page
});