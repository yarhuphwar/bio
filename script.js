function updateStatus() {
            const statusIndicator = document.getElementById('status-indicator');
            const now = new Date();
            const currentHour = now.getHours(); // Gets the hour in 24-hour format (0-23)

            // Check if current hour is between 1 AM (1) and 7 AM (7).
            // 1 AM is hour 1, 6 AM is hour 6. 7 AM (hour 7) would make it active again.
            if (currentHour >= 1 && currentHour < 7) {
                statusIndicator.textContent = 'Offline';
                statusIndicator.classList.remove('status-active');
                statusIndicator.classList.add('status-offline');
            } else {
                statusIndicator.textContent = 'Active';
                statusIndicator.classList.remove('status-offline');
                statusIndicator.classList.add('status-active');
            }
        }

        // Call the function once when the page loads to set the initial status
        updateStatus();

        // Update the status every minute to ensure it's always accurate
        setInterval(updateStatus, 60 * 1000); // 60 * 1000 milliseconds = 1 minute