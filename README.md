# Dynamic Form Builder

This project demonstrates how to dynamically generate and populate a form in React from a configurable API response. It simulates fetching configuration data from a mock API, rendering input fields based on the data type, and submitting the collected form values back to another simulated API endpoint.

## Overview

The form automatically adapts to different tool configurations without hardcoding field names. Each configuration contains information about input types (slider, select, checkbox, number), labels, and default values. When submitted, the form logs the resulting JSON payload and displays it in an overlay.

## Key Features

- Dynamic rendering of input fields based on API response structure
- Two mock API configurations to simulate different tool setups
- Centralized state management for form values
- Generic change handler that works for all input types
- Mock POST request with a temporary confirmation overlay
- Clean separation of concerns using modular architecture
