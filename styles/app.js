(function () {
    console.log("Portfolio JavaScript loaded successfully");
    
    // Get all control buttons
    const controls = document.querySelectorAll(".control");
    const sections = document.querySelectorAll(".container");
    
    console.log("Found controls:", controls.length);
    console.log("Found sections:", sections.length);
    
    // Add click event listeners to all control buttons
    controls.forEach((button, index) => {
        console.log(`Control ${index}:`, button.getAttribute("data-id"));
        
        button.addEventListener("click", function() {
            console.log("Control clicked:", this.getAttribute("data-id"));
            
            // Remove active class from all buttons
            controls.forEach(btn => btn.classList.remove("active-btn"));
            
            // Add active class to clicked button
            this.classList.add("active-btn");
            
            // Remove active class from all sections
            sections.forEach(section => section.classList.remove("active"));
            
            // Add active class to corresponding section
            const targetId = this.getAttribute("data-id");
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.add("active");
                console.log("Activated section:", targetId);
            } else {
                console.error(`Section with id "${targetId}" not found`);
            }
        });
    });
    
    // Theme toggle functionality
    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            console.log("Theme toggled");
        });
    } else {
        console.error("Theme button not found");
    }
    
    // Initialize the first tab as active (if not already set)
    const activeBtn = document.querySelector(".control.active-btn");
    if (!activeBtn && controls.length > 0) {
        controls[0].classList.add("active-btn");
        const firstSectionId = controls[0].getAttribute("data-id");
        const firstSection = document.getElementById(firstSectionId);
        if (firstSection) {
            firstSection.classList.add("active");
            console.log("Initialized first tab:", firstSectionId);
        }
    }
    
    console.log("Portfolio JavaScript initialization complete");
})();