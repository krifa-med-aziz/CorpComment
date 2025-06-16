# CORPCOMMENT

_Your voice, their improvement — make every company listen._

![Last Commit](https://img.shields.io/github/last-commit/krifa-med-aziz/CorpComment)
![Languages](https://img.shields.io/github/languages/count/krifa-med-aziz/CorpComment)
![Top Language](https://img.shields.io/github/languages/top/krifa-med-aziz/CorpComment)

_Built with the tools and technologies:_

![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?logo=zustand&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-blue?logo=css3&logoColor=white)
![Fetch API](https://img.shields.io/badge/Fetch-API-green)

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

---

## Overview

💬 **CorpComment** is a modern feedback board app where users can share opinions about companies using hashtags like `#Google` or `#Apple`.

The app allows users to filter feedback by company in real time — making it a great example of interactive UI and clean state management with Zustand.

✨ **Core Features:**

- 📝 Submit feedback with hashtags for company names
- 📄 View and filter feedback by hashtag
- ⚙️ Remote data fetching and posting
- 🚦 Error and loading state handling
- 🧠 Global state management with Zustand

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+ recommended)
- **npm** or **yarn**

---

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/krifa-med-aziz/CorpComment.git
cd CorpComment
```

2. **Install dependencies**:

```bash
npm install
# or
yarn install
```

3. **Start the development server**:

```bash
npm run dev
# or
yarn dev
```

4. **Visit the app** in your browser at:

```
http://localhost:5173
```

---

## Usage

- 🖊️ Type your feedback into the textarea (e.g. `Amazing support! #Google`)
- 📤 Click "Submit" to send it to the remote server
- 🏷️ Click on any hashtag to filter the feedback list by company
- ⏳ Loading indicators and ❌ error messages appear when necessary

All feedback is fetched from and posted to:

```
https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks
```

---

## Testing

🔍 No automated tests are currently set up.

For manual testing:

- ✅ Test feedback submission
- ✅ Try filtering by hashtags
- ✅ Simulate error states (e.g., turn off internet)
- ✅ Use dev tools to inspect state updates from Zustand

You may integrate tools like **Vitest**, **React Testing Library**, or **Cypress** in the future to enhance reliability.

---

> _Made with ❤️ by [krifa-med-aziz](https://github.com/krifa-med-aziz)_
