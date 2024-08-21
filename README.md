# HHLD Chat Application

This is a **real-time chat application** built using **Javascript**, **ReactJS**, **NextJS**, **ReactJS**, **Redis**, **MongoDB**, **Websockets**, **Docker**,**TailwindCSS** and implements a **Pub/Sub Model** for handling offline messaging. The application is designed to provide seamless messaging between users, even when one of the users is offline, using the Pub/Sub architecture.

## Tech Stack

### Frontend
- **NextJS**: The frontend of this chat application is built using NextJS, a powerful React framework for server-side rendering and static site generation. This ensures faster page loads and SEO benefits, making the chat application highly performant.

### Backend
- **Redis**: Redis is used to implement the **Pub/Sub** messaging model, which helps in delivering messages between users in real-time, even when some of them are offline. Redis channels help in decoupling the sender and receiver by ensuring that messages are stored and forwarded when the receiver comes online.

- **MongoDB**: MongoDB is used as the primary database to persist chat conversations and user data. All chat messages are stored in MongoDB collections, allowing for reliable retrieval of conversation history even after users disconnect.

- **Websockets**: Websockets are used to maintain a persistent connection between the client and the server, enabling real-time, bidirectional communication. This ensures that messages are instantly pushed to the users' interfaces as they are received by the server.

### DevOps
- **Docker**: The application is containerized using Docker, which allows for easier deployment and scalability. The use of Docker ensures that the application can be run consistently across different environments, and simplifies dependency management.

## Features

- **Real-Time Messaging**: Powered by Websockets, the application delivers real-time chat experiences. Messages are pushed instantly to the recipient’s interface without needing to refresh the page.

- **Offline Messaging with Pub/Sub Model**: The **Pub/Sub (Publish/Subscribe)** model is implemented using Redis to handle offline messaging. 
  - When a message is sent to a user who is offline, the message is published to a Redis channel and stored on the MongoDB database.
  - When the user comes online, the message is received by subscribing to the appropriate channel and from database. This ensures that no messages are lost, even when users are temporarily unavailable.

- **User Authentication**: JWT-based authentication is implemented to secure user sessions. Users must authenticate to join chat rooms and participate in conversations.

- **Scalable Backend**: With the use of Docker, Redis, and Websockets, the backend is highly scalable. New instances of the backend can be easily deployed and balanced using tools like AWS load balancers.

## How the Pub/Sub Model Helps in Offline Messaging

The **Pub/Sub Model** is key to enabling offline messaging within this application:
- **Publisher**: When a user sends a message, it is published to a specific Redis channel corresponding to the recipient.
- **Subscriber**: If the recipient is offline, they are subscribed to their Redis channel. Once they reconnect, Redis sends them all messages published during their absence.
- This model decouples the sender from the receiver and ensures that messages are reliably delivered when both users are online.

## Running the Application Locally

### Prerequisites
- Ensure that **Docker** is installed on your machine.
- You will need a **MongoDB** instance and a **Redis** server running locally or in the cloud.

### Sample Screenshots of Messaging

![Screenshot 2024-08-22 013708](https://github.com/user-attachments/assets/24bc8701-a5ac-43d2-8d6b-1f9ba3f15591)
![Screenshot 2024-08-22 013714](https://github.com/user-attachments/assets/0111d751-323a-4e5d-bcf1-3a007e2c7867)
![Screenshot 2024-08-22 013721](https://github.com/user-attachments/assets/4e40476a-8b3c-49f1-bec9-d73c4fa4c5b3)
![Screenshot 2024-08-22 013730](https://github.com/user-attachments/assets/283ec735-9eef-4fec-a9ac-f57f747164ca)
![Screenshot 2024-08-22 013815](https://github.com/user-attachments/assets/17f34ca0-ce84-4d17-9c46-0f8d25b16bd9)


