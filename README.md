# NX NestJS Monorepo

This is a monorepo built with NestJS, TypeScript, Prisma, and SQL Server. The project uses NX as a monorepo management tool for better organization and development efficiency.

The idea here is to create a simple structure, without any connected services, just to be used as a base template for a monorepo structure.

## 🏗️ Project Structure

```
📦 your-monorepo
 ┣ 📂 apps
 ┃ ┣ 📂 auth-service
 ┃ ┣ 📂 service-a
 ┃ ┗ 📂 service-b
 ┣ 📂 libs
 ┃ ┣ 📂 common
 ┃ ┗ 📂 database
 ┣ 📜 package.json
 ┣ 📜 nx.json
 ┗ 📜 tsconfig.json
```

### Main Directories

- `apps/`: Contains all microservices
- `auth-service/`: Central authentication service
- `service-a/`, `service-b/`: Other application services
- `libs/`: Shared code between services
- `common/`: Shared utilities, guards, decorators
- `database/`: Prisma configurations and clients

## 🚀 Getting Started

Contribute with the same main configuration. The idea here is not to make library or service configurations, but rather to create just the initial structure.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feat/AmazingFeature`)
3. Commit your changes (`npm run commit`)
4. Push to branch (`git push origin feat/AmazingFeature`)
5. Open a Pull Request
