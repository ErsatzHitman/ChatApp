# 💬 HHLD Chat Application

This is a **real-time chat application** built with **JavaScript**, **ReactJS**, **NextJS**, **Redis**, **MongoDB**, **WebSockets**, **Docker**, and **TailwindCSS**. It leverages a **Pub/Sub Model** to handle offline messaging, ensuring seamless communication even when users are not online.

## 🛠️ Tech Stack

### 🖥️ Frontend

- **NextJS**: The frontend is built using NextJS, a powerful React framework for server-side rendering (SSR) and static site generation (SSG). This helps ensure faster page loads and improves SEO performance, making the application more efficient and scalable.
- **Tailwind CSS**: Tailwind CSS is used for styling the application, providing utility-first CSS classes that make it easy to build responsive and modern UI components quickly and efficiently.

### 🗄️ Backend

- **Redis**: Redis is used to implement the **Pub/Sub** messaging model, which allows real-time message delivery between users. Even when users are offline, Redis ensures that messages are delivered when they reconnect, thanks to its channel-based architecture.
- **MongoDB**: MongoDB serves as the primary database for persisting chat conversations and user data. Chat messages are stored in MongoDB collections, allowing users to retrieve their conversation history even after they disconnect.
- **WebSockets**: WebSockets enable persistent, real-time, bidirectional communication between clients and servers. This ensures that messages are pushed to users instantly without the need to refresh the page.

### ⚙️ DevOps

- **Docker**: The application is containerized using Docker, making deployment and scalability easier. Docker ensures consistent performance across different environments, simplifies dependency management, and helps with orchestration in production environments.

## 🚀 Features

- **💬 Real-Time Messaging**: Powered by WebSockets, messages are delivered instantly to the recipient’s interface without the need for a page refresh.
- **🕓 Offline Messaging with Pub/Sub Model**: Implemented using Redis, the **Pub/Sub (Publish/Subscribe)** model helps handle offline messaging.
  - When a message is sent to an offline user, it is published to a Redis channel and stored in MongoDB.
  - When the user reconnects, they subscribe to their respective Redis channel and receive all the messages sent while they were offline, ensuring no message is lost.
- **🔐 User Authentication**: The app uses **JWT-based authentication** to secure user sessions. Users need to authenticate to participate in chat rooms and send/receive messages.
- **⚡ Scalable Backend**: The backend is designed for scalability using Docker, Redis, and WebSockets. Multiple instances of the backend can be deployed and balanced using tools like AWS load balancers.

## 📊 Pub/Sub Model in Offline Messaging

The **Pub/Sub Model** plays a crucial role in handling offline messaging in this application:
- **Publisher**: When a user sends a message, it is published to a Redis channel assigned to the recipient.
- **Subscriber**: If the recipient is offline, they subscribe to their respective Redis channel. When they come back online, Redis sends all the messages that were published while they were offline.
- This architecture decouples the sender from the receiver, ensuring that messages are reliably delivered even when users aren't simultaneously online.

## 📦 Running the Application Locally

### Prerequisites

- **Docker**: Make sure Docker is installed and running on your machine.
- **MongoDB & Redis**: You’ll need to have MongoDB and Redis running either locally or in the cloud.

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ChatApp.git
   cd hhld-chat-app
2. **Start Docker containers**:

    ```bash
    docker-compose up
    ```
3. **Access the application**: Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎥 Demo

Check out the video demo [here](https://drive.google.com/file/d/1ORBdzU42iiSwNFZTy0C6A8OnaHUJIrSx/view?usp=sharing).

## 📸 Screenshots

Here are a few screenshots of the application:

![Screenshot 1](https://github.com/user-attachments/assets/24bc8701-a5ac-43d2-8d6b-1f9ba3f15591)
![Screenshot 2](https://github.com/user-attachments/assets/0111d751-323a-4e5d-bcf1-3a007e2c7867)
![Screenshot 3](https://github.com/user-attachments/assets/4e40476a-8b3c-49f1-bec9-d73c4fa4c5b3)
![Screenshot 4](https://github.com/user-attachments/assets/283ec735-9eef-4fec-a9ac-f57f747164ca)
![Screenshot 5](https://github.com/user-attachments/assets/17f34ca0-ce84-4d17-9c46-0f8d25b16bd9)

