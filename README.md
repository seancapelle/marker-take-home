# Backend API for Frontend Take-Home Project

This is a simple backend API built using **NestJS** and **SQLite**. It is designed to provide the necessary endpoints for the frontend take-home project. The backend serves a list of markers, each with latitude, longitude, and other details, and requires a **Bearer token** for API access.

The backend includes:
- **Basic CRUD operations** for the `Marker` entity.
- **Bearer token authentication** for secure API access using a hardcoded token.
- **SQLite** as the database for lightweight storage.
- Automatic management of `createdDate` and `lastUpdated` timestamps.

## Purpose
This backend API is meant to be used as a companion service for the frontend take-home project. Candidates working on the frontend project will interact with this API to fetch and manage marker data for their map-based application.

## Features
- **API Key Authentication:** All routes are protected by a Bearer token, which must be provided in the `Authorization` header.
- **Marker Management:** Allows fetching, creating, and updating marker data, including geolocation (latitude and longitude).
- **Timestamps:** Each marker has automatically managed `createdDate` and `lastUpdated` fields.
- **SQLite Database:** The API uses an SQLite database, which is file-based and easy to reset or share.

## Prerequisites
- **Node.js** (version 14.x or higher)
- **NestJS** (This project uses NestJS, a framework for building efficient, reliable, and scalable server-side applications.)

## Getting Started

### 1. Unzip the Project

Unzip the provided **zip file** and navigate into the project directory:

```bash
unzip backend-take-home-api.zip
cd backend-take-home-api
```

### 2. Install Dependencies
```npm install```

### 3. Start the Server
```npm run start```
The API will be available at http://localhost:3000.

### 4. API Endpoints
The API provides the following endpoints:
- **GET /markers:** Fetch all markers.
- **GET /markers/:id:** Fetch a single marker by ID.
- **POST /markers:** Create a new marker.
- **PUT /markers/:id:** Update an existing marker.
- **DELETE /markers/:id:** Delete a marker by ID.
- **Example POST and PUT Request Body:**
    ```json
    {
      "title": "San Francisco",
      "description": "A beautiful city by the bay.", // Optional
      "latitude": 37.7749,
      "longitude": -122.4194,
      "hasVideo": true, // Optional,
      "hasAttachment": true // Optional
    }
    ```
- **Example Marker Response Body:**
- ```json
    {
      "id": 1,
      "title": "San Francisco",
      "description": "A beautiful city by the bay.",
      "latitude": 37.7749,
      "longitude": -122.4194,
      "hasVideo": true,
      "hasAttachment": true,
      "createdDate": "2021-10-10T00:00:00.000Z",
      "lastUpdated": "2021-10-10T00:00:00.000Z"
    }
    ```