# Virtual Maths Camp Cards

Welcome to **Virtual Maths Camp Cards**! A website dedicated to sharing mathematical problems and puzzles, and companion to the Maths Camp Card Deck.

Each card features a unique problem, along with dedicated pages for hints, solutions and extension activities to encourage further exploration.

The site is designed to be lightweight for use in low-internet environments, with support for multiple languages (currently English and French)

The website can be viewed at: https://cards.virtualmathscamp.com

## Tech Stack

- [Angular](https://angular.dev/)
- [Angular Universal](https://angular.dev/guide/universal) for Server-Side Rendering (SSR)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/) for styling

## Project Structure

- **src/app/components/**: UI components, including card display and language selection.
- **src/app/data/**: Problem data, language strings, and card content.
- **src/assets/**: Images and card content for each language.
- **src/app/pages/**: Individual pages for card details, solutions, and extensions.

## Contributing

We welcome contributions! All text and translations used in cards are managed on [Crowdin](https://crowdin.com/), please open an issue or reach out to a maintainer if interested in improving translations or adding a new language

Issues and pull requests are also welcome on this issue, particular with help to:

- Enhancing the UI or accessibility
- Improve performance in low-resource environments

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)

### Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/supportingami/virtual-maths-camp-cards
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**

    ```bash
    npm run start
    ```

    Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building the Project

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/vmc-cards/browser` directory. This will create a static version of the site that can be deployed to any static web hosting service.
