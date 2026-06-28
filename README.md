<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Description

A progressive [NestJS](https://github.com/nestjs/nest) application template featuring a **Profiles** resource module alongside the standard NestJS configuration.

---

## Directory Structure

Here is an overview of the key source files included in this project:

```text
src/
├── profiles/                          # Profiles feature module
│   ├── dto/                           # Data Transfer Objects
│   │   ├── create-profile.dto.ts      # Schema for creating a profile
│   │   └── update-profile.dto.ts      # Schema for updating a profile
│   ├── profiles.controller.ts         # Handles profiles routes & controllers
│   └── profiles.module.ts             # Bundles the profiles components
├── app.controller.ts                  # Main root controller
├── app.service.ts                     # Main root service
├── app.module.ts                      # Main root module importing the Profiles module
└── main.ts                            # Application entry point (bootstrap)
```

---

## API Reference

The application exposes the following endpoints (default base URL is `http://localhost:3000`):

| Method | Endpoint | Description | Request Parameters / Body |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Retrieve the standard welcome message. | None |
| **GET** | `/profiles` | Retrieve a list of profiles filtered by location query param. | Query: `location` (string) |
| **GET** | `/profiles/:id` | Retrieve details for a specific profile ID. | Path: `id` (string) |
| **POST** | `/profiles` | Create a new profile. | Body: `{ name: string, description: string }` |
| **PUT** | `/profiles` | Update profile information. | Body: `{ name: string, description: string }` |

### API Usage Examples (cURL)

#### 1. Welcome Route
```bash
curl http://localhost:3000/
# Response: "Hello World!"
```

#### 2. Get Profiles by Location
```bash
curl "http://localhost:3000/profiles?location=Boston"
# Response: [{"location":"Boston"}]
```

#### 3. Get Profile by ID
```bash
curl http://localhost:3000/profiles/42
# Response: {"id":"42"}
```

#### 4. Create Profile
```bash
curl -X POST http://localhost:3000/profiles \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "description": "Senior Software Architect"}'
# Response: {"name":"Jane Doe","description":"Senior Software Architect"}
```

#### 5. Update Profile
```bash
curl -X PUT http://localhost:3000/profiles \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "description": "Lead Principal Architect"}'
# Response: {"name":"Jane Doe","description":"Lead Principal Architect"}
```

---

## Project Setup

To install all dependencies:

```bash
$ npm install
```

## Compile and Run the Project

```bash
# development
$ npm run start

# watch mode (hot reload)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## Deployment

When you're ready to deploy your NestJS application to production, check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), the official platform for deploying NestJS applications on AWS:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

---

## Resources

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more.
- Ask questions and get support on the [Discord channel](https://discord.gg/G7Qnnhy).
- Check out the official video [courses](https://courses.nestjs.com/).
- Visualize application graph with [NestJS Devtools](https://devtools.nestjs.com).
- Enterprise consulting & support: [NestJS Enterprise Support](https://enterprise.nestjs.com).
- Follow updates on [X / Twitter](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

## Support

Nest is an MIT-licensed open source project. It grows thanks to the support of backers and sponsors. If you would like to join them, please [read support details here](https://docs.nestjs.com/support).

## Stay in Touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

