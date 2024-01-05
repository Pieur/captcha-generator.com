// ==UserScript==
// @name         GitHub Checkbox Clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically checks a checkbox on a GitHub page
// @author       You
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to click the checkbox
    function clickCheckbox() {
        var checkbox = document.getElementById("myCheckbox");

        // Check if the checkbox element is found
        if (checkbox) {
            // Simulate a click on the checkbox
            checkbox.click();
        } else {
            console.error("Checkbox not found!");
        }
    }

    // Run the function when the page is fully loaded
    window.addEventListener('load', function() {
        // Click the checkbox after a short delay (adjust as needed)
        setTimeout(clickCheckbox, 1000);
    });

})();
