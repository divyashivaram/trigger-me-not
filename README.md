# Trigger-me-not

A browser extension to help users avoid potential psychological triggers on the internet. This application is a chrome extension that parses the webpage content and detects potential triggers and blurs the text with a <TW: reason> and a button to unhide the blur if the user wishes to read it anyway.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Google Chrome*

*version to be updated

### Installing

1. Go to chrome://extensions/ and enable developer mode
2. Click "Load unpacked extension" and select root folder to add extension to chrome

### TODO:
* Milestone-1: Detect and blur sexual assault related triggers from Google news Headlines
    - [x]  Set up Chrome Extension
    - [x] Fetch headlines on page load completion
    - [x] Detect potential triggers in the fetched headlines
    - [x] Update DOM element to blur text
    - [x] Allow users to add their own triggers

* Milestone-2: Context based detection of Triggers- Using Machine Learning
    - [x] Set up Flask server
    - [x] Write REST API to accept POST requests with dummy payload and respond with a JSON
    - [x] Fetch data and label them for building the ML model- Triggers and Non-triggers (Third person news reporting trigger data is not available)
    - [x] Build a Logistic Regression model to classify Triggers
    - [ ] API tests
    - [ ] Integrate with Chrome extension
    - [ ] Optimise request-response time

* Milestone-3: Extend supported content beyond Google news headlines to full length articles

* Create issues on github for pending action items
* Upload Specification document
 

## Authors

* **Divya Sivaram**
