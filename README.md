# Node.js FAQ System

A multilingual FAQ system built with Node.js, Express, MongoDB, and Redis, featuring automated translations and a REST API.

## 🚀 Features
- Store and retrieve FAQs with multilingual support
- WYSIWYG editor integration for rich text answers
- Language selection via `?lang=` query parameter
- Caching with Redis for improved performance
- Automated translations using Google Translate API
- RESTful API for managing FAQs
- Unit tests with Mocha & Chai

---

## 📌 Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Redis](https://redis.io/docs/getting-started/)

---

## 🛠 Installation

```sh
# Clone the repository
git clone https://github.com/your-username/node-faq-system.git
cd node-faq-system

# Install dependencies
npm install

# Create a .env file
cp .env.example .env
# Update the .env file with your MongoDB and Redis configurations

# Start the development server
npm run dev

# Run tests
npm test
```

---

## 📡 API Usage

### 1️⃣ Fetch FAQs
```sh
GET /api/faqs?lang=hi
```

#### Example Response:
```json
[
  {
    "id": "123456",
    "question": "यह एक नमूना प्रश्न है?",
    "answer": "यह एक नमूना उत्तर है।"
  }
]
```

### 2️⃣ Create an FAQ
```sh
POST /api/faqs
```

#### Request Body:
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine."
}
```

#### Example Response:
```json
{
  "id": "123456",
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
  "question_hi": "Node.js क्या है?",
  "question_bn": "Node.js কি?"
}
```

---

## 🏗 Contribution Guidelines

```sh
# Fork the repository and create a new branch
git checkout -b feature/new-feature

# Follow conventional commit messages
# feat: for new features
# fix: for bug fixes
# docs: for documentation updates

# Run linting and tests before committing
npm run lint
npm test

# Push changes and create a pull request
git push origin feature/new-feature
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 📞 Support

For issues or feature requests, open an [issue](https://github.com/your-username/node-faq-system/issues).

