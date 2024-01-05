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

    function clickCheckbox() {
function clickCheckbox() {
        let checkbox = document.getElementById("myCheckbox");
        let checkbox_reCaptcha = document.getElementById("recaptcha-anchor");
        let reload_button = document.getElementById("recaptcha-reload-button");
        if (checkbox) {
            checkbox.click();
        } else {
            console.error("Checkbox not found!");
        }
        
        if (checkbox_reCaptcha){
            checkbox_reCaptcha.click();
            if (checkbox_reCaptcha.checked){
                reload_button.click;
            }
        } else {
            console.error("Checkbox not found");
        }
                          
    }
    // Run the function when the page is fully loaded
    window.addEventListener('load', function() {
        // Click the checkbox after a short delay (adjust as needed)
        setTimeout(clickCheckbox, 1000);
    });

