# QR-Code-Generator

Description

This project is a simple QR Code Generator that takes a user's URL input and creates a corresponding QR code in PNG format. The user is prompted to enter a URL using the Inquirer library, and the entered URL is then processed to generate a QR code image with qr-image library. Then, is created through File 
System, a .txt file describing the URL typed.

Features

    -User-friendly command-line interface using Inquirer for URL input.
    -Generates a QR code in PNG format for the provided URL.
    -Saves the generated QR code image in the project directory.

Prerequisites

    -Node.js installed on your machine.
    -npm (Node Package Manager) installed.

Dependencies

    qr-image - A QR code generator for Node.js.
    inquirer - A collection of common interactive command-line user interfaces.