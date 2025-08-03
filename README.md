# Virtual Maths Camp Cards

This project hosts a static website for the Virtual Maths Camp, displaying a collection of engaging maths problems presented on playing cards. Each card features a unique problem, along with dedicated pages for solutions and extension activities to encourage further exploration. The site is designed to be accessible to a wide audience, with support for multiple languages (currently English and French).

This application is built with [Angular](https://angular.dev/) and uses [Angular Universal](https://angular.dev/guide/universal) for server-side rendering to generate a fast and performant static website.

## Features

*   **Engaging Maths Problems:** A deck of virtual playing cards, each presenting a unique maths problem.
*   **Detailed Solutions:** Each problem has a corresponding page with a detailed solution.
*   **Extension Activities:** Go beyond the solution with extension activities to deepen understanding.
*   **Multi-language Support:** The entire site is available in both English and French.
*   **Static Site:** Built as a static site for fast loading and easy deployment.

## Tech Stack

*   [Angular](https://angular.dev/)
*   [Angular Universal](https://angular.dev/guide/universal) for Server-Side Rendering (SSR)
*   [TypeScript](https://www.typescriptlang.org/)
*   [SCSS](https://sass-lang.com/) for styling

## Development

### Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm)
*   [Angular CLI](https://angular.dev/tools/cli)

### Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building the Project

To build the project for production, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/vmc-cards/browser` directory. This will create a static version of the site that can be deployed to any static web hosting service.

## Running Tests

To execute the unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```