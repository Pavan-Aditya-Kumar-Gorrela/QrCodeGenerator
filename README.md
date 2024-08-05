# QR Code Generator

## Overview

The QR Code Generator is a ReactJS-based tool that allows you to generate QR codes from various types of data. This project utilizes the `qrcode` library to create and save QR codes as image files. The tool is designed to be simple and easy to use for generating QR codes for URLs, text, and other data types.

## Features

- Generate QR codes from text, URLs, or other data.
- Save generated QR codes in PNG format.
- Customize QR code appearance with options for error correction and box size.

## Prerequisites:
React
Functional Components
React Hooks
Javascript ES6

## Approach:
Our app consists of two sections. In the first section, we will collect user inputs such as the text to encode, the size of the QR code, and the background color of the QR code, and store these inputs in state variables. Subsequently, we will construct the necessary API string to fetch the QR code image. In the second section, we will display the generated QR code.

### Creating a React application:

Step 1: Create a react application by typing the following command in the terminal.

npx create-react-app qrcode-gen

Step 2: Now, go to the project folder i.e qrcode.gen by running the following command.

Step to Run Application: Run the application using the following command from the root directory of the project:

npm start


