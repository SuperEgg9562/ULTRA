/**
 * Decypher The Universe - Interface Navigation Interaction Engine
 * Handles decoupled button events to external project hyperlinks
 */

document.addEventListener("DOMContentLoaded", () => {
    
    const daplButton = document.getElementById("dapl-trigger");
    

    if (daplButton) {
        daplButton.addEventListener("click", (event) => {
  
            event.preventDefault();
            

            const targetUrl = "html/DAPL.html";
            
           
            window.location.href = targetUrl;
            
            // Option B: Un-comment the line below if you want it to jump open inside a brand new browser tab instead:
            // window.open(targetUrl, '_blank', 'noopener,noreferrer');
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    
    const VSThemeProjectButton = document.getElementById("VSThemeProject-trigger");
    

    if (VSThemeProjectButton) {
        VSThemeProjectButton.addEventListener("click", (event) => {
  
            event.preventDefault();
            

            const targetUrl = "theme-matrix-vs.html";
            
           
            window.location.href = targetUrl;
            
            // Option B: Un-comment the line below if you want it to jump open inside a brand new browser tab instead:
            // window.open(targetUrl, '_blank', 'noopener,noreferrer');
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    
    const ExcelProjectButton = document.getElementById("ExcelProject-trigger");
    

    if (ExcelProjectButton) {
        ExcelProjectButton.addEventListener("click", (event) => {
  
            event.preventDefault();
            

            const targetUrl = "excel-training-monitor.html";
            
           
            window.location.href = targetUrl;
            
            // Option B: Un-comment the line below if you want it to jump open inside a brand new browser tab instead:
            // window.open(targetUrl, '_blank', 'noopener,noreferrer');
        });
    }
});
