// JavaScript for animated elements
document.addEventListener('DOMContentLoaded', function() {
    // Create particle network
    createParticleNetwork();
    
    // Add neural network animation
    createNeuralNetwork();
    
    // Apply animation classes to elements
    applyAnimationClasses();
    
    // Initialize typing effect
    initTypingEffect();
});

// Create particle network with connections
function createParticleNetwork() {
    const container = document.createElement('div');
    container.className = 'particle-network';
    document.body.appendChild(container);
    
    const particleCount = 50;
    const particles = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Random size class
        const sizeClass = Math.random() < 0.5 ? 'small' : (Math.random() < 0.5 ? 'medium' : 'large');
        particle.className = `particle ${sizeClass}`;
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Random speed
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        
        // Set styles
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        
        // Store particle data
        particles.push({
            element: particle,
            x: posX,
            y: posY,
            speedX: speedX,
            speedY: speedY
        });
        
        // Add to container
        container.appendChild(particle);
    }
    
    // Create connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            if (Math.random() < 0.1) { // Only connect some particles
                const connection = document.createElement('div');
                connection.className = 'connection';
                container.appendChild(connection);
                
                // Update connection position and rotation in animation frame
                updateConnection(connection, particles[i], particles[j]);
            }
        }
    }
    
    // Animation loop
    function animate() {
        // Update particle positions
        particles.forEach(particle => {
            // Move particle
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > window.innerWidth) {
                particle.speedX *= -1;
            }
            
            if (particle.y < 0 || particle.y > window.innerHeight) {
                particle.speedY *= -1;
            }
            
            // Update position
            particle.element.style.left = `${particle.x}px`;
            particle.element.style.top = `${particle.y}px`;
        });
        
        // Update connections
        const connections = document.querySelectorAll('.connection');
        let connectionIndex = 0;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                if (connectionIndex < connections.length) {
                    updateConnection(connections[connectionIndex], particles[i], particles[j]);
                    connectionIndex++;
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
}

// Update connection position and rotation
function updateConnection(connection, particleA, particleB) {
    // Calculate distance and angle
    const dx = particleB.x - particleA.x;
    const dy = particleB.y - particleA.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    // Only show connection if particles are close enough
    if (distance < 150) {
        connection.style.opacity = 1 - (distance / 150);
        connection.style.width = `${distance}px`;
        connection.style.left = `${particleA.x}px`;
        connection.style.top = `${particleA.y}px`;
        connection.style.transform = `rotate(${angle}deg)`;
    } else {
        connection.style.opacity = 0;
    }
}

// Create neural network animation
function createNeuralNetwork() {
    const container = document.createElement('div');
    container.className = 'neural-network';
    document.body.appendChild(container);
    
    const neuronCount = 30;
    const neurons = [];
    
    // Create neurons
    for (let i = 0; i < neuronCount; i++) {
        const neuron = document.createElement('div');
        neuron.className = 'neuron';
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Set styles
        neuron.style.left = `${posX}px`;
        neuron.style.top = `${posY}px`;
        
        // Store neuron data
        neurons.push({
            element: neuron,
            x: posX,
            y: posY
        });
        
        // Add to container
        container.appendChild(neuron);
    }
    
    // Create synapses between neurons
    for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
            if (Math.random() < 0.05) { // Only connect some neurons
                const synapse = document.createElement('div');
                synapse.className = 'synapse';
                container.appendChild(synapse);
                
                // Calculate distance and angle
                const dx = neurons[j].x - neurons[i].x;
                const dy = neurons[j].y - neurons[i].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                
                // Set styles
                synapse.style.width = `${distance}px`;
                synapse.style.left = `${neurons[i].x}px`;
                synapse.style.top = `${neurons[i].y}px`;
                synapse.style.transform = `rotate(${angle}deg)`;
                
                // Animate synapse
                setInterval(() => {
                    synapse.style.opacity = Math.random() * 0.5 + 0.1;
                }, Math.random() * 2000 + 1000);
            }
        }
    }
}

// Apply animation classes to elements
function applyAnimationClasses() {
    // Add floating animation to about cards
    document.querySelectorAll('.about-card').forEach((card, index) => {
        card.classList.add('card-hover-effect');
        setTimeout(() => {
            card.classList.add('floating-element');
        }, index * 200); // Stagger animation
    });
    
    // Add pulse animation to service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.classList.add('card-hover-effect');
        setTimeout(() => {
            card.classList.add('pulse-element');
        }, index * 200); // Stagger animation
    });
    
    // Add glow animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.add('glow-element');
    });
    
    // Add gradient text animation to section titles
    document.querySelectorAll('.section-title h3').forEach(title => {
        title.classList.add('gradient-text');
    });
    
    // Add data flow background to sections
    const sections = document.querySelectorAll('.about, .services, .contact');
    sections.forEach(section => {
        const dataFlow = document.createElement('div');
        dataFlow.className = 'data-flow';
        section.appendChild(dataFlow);
    });
}

// Initialize typing effect for hero heading
function initTypingEffect() {
    const heroHeading = document.querySelector('.hero h2');
    if (heroHeading) {
        heroHeading.classList.add('typing-effect');
    }
}
