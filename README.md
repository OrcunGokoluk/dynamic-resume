# Dynamic Resume

Dynamic Resume is a lightweight and flexible JSON-powered repository for creating and serving dynamic resume data. This project is ideal for building a customizable resume with structured data that can be easily integrated into web applications or personal portfolio projects.

## Features

- JSON-based data structure for easy customization.
- Local server for testing and serving data using `json-server`.
- Fully customizable fields
- Quick setup and integration with front-end frameworks or custom scripts.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OrcunGokoluk/dynamic-resume.git
   cd dynamic-resume
   ```

2. Install dependencies:
   ```bash
   npm install -g json-server
   ```

3. Start the server:
   ```bash
   json-server --watch db.json --port 3000
   ```
   The JSON server will run at `http://localhost:3000`.


### Endpoints

- `GET /person-info`
- `GET /skills`
- `GET /languages`
- `GET /experience`
- `GET /education`
- `GET /socialmedia`


