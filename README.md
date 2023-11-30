# ChatApp Backend

|                                                                                                                   |                                                                                                                                                |                                                                                                                           |                                                                                                                            |
| :---------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![First Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482458/github_readme_images/aws_bxdmec.png) | ![Second Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482319/github_readme_images/Terraform_PrimaryLogo_Color_RGB_gcbknj.png) | ![Third Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482279/github_readme_images/nodejs-logo_hqxxed.svg) | ![Fourth Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482298/github_readme_images/ts-logo-512_jt9rmi.png) |

|                                                                                                                          |                                                                                                                                      |                                                                                                                   |                                                                                                                         |
| :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| ![First Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482275/github_readme_images/redis-icon_xzk6f2.png) | ![Second Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482528/github_readme_images/Logo_RGB_Forest-Green_qjxd7x.png) | ![Third Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482577/github_readme_images/pm2_owgicz.png) | ![Fourth Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482745/github_readme_images/socketio_lcyu8y.jpg) |

|                                                                                                                         |                                                                                                                     |                                                                                                                        |                                                                                                                           |
| :---------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
| ![First Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482903/github_readme_images/Expressjs_sza4ue.png) | ![Second Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662483106/github_readme_images/bull_y4erki.png) | ![Third Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482947/github_readme_images/sendgrid_d1v6dc.jpg) | ![Fourth Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662483059/github_readme_images/nodemailer_rfpntx.png) |

|     |
| :-: |

![First Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662483242/github_readme_images/cloudinary_logo_blue_0720_2x_n8k46z.png)

Chatty App backend server is an interesting real-time social network application. It is developed using [node.js](https://nodejs.org/en/), [typescript](https://www.typescriptlang.org/), [redis](https://redis.io/download/) and [mongodb](https://www.mongodb.com/docs/manual/administration/install-community/).

You can find the repo for the frontend built with react [here](https://github.com/uzochukwueddie/chatty).

## Features

1. Signup and signin authentication
2. Forgot password and reset password
3. Change password when logged in
4. Create, read, update and delete posts
5. Post reactions
6. Comments
7. Followers, following, block and unblock
8. Private chat messaging with text, images, gifs, and reactions
9. Image upload
10. In-app notification and email notification

## Main tools

- Node.js
- Typescript
- MongoDB
- Mongoose
- Redis
- Express
- Bull
- PM2
- Nodemailer
- Sendgrid mail
- Cloudinary
- Jest
- Lodash
- Socket.io

## Requirements

- Node 16.x or higher
- Redis ([https://redis.io/download/](https://redis.io/download/))
- MongoDB ([https://www.mongodb.com/docs/manual/administration/install-community/](https://www.mongodb.com/docs/manual/administration/install-community/))
- Typescript
- API key, secret and cloud name from cloudinary [https://cloudinary.com/](https://cloudinary.com/)
- Local email sender and password [https://ethereal.email/](https://ethereal.email/)

You'll need to copy the contents of `.env.development.example`, add to `.env` file and update with the necessary information.

## Local Installation

- There are three different branches develop, staging and main. The develop branch is the default branch.

```bash
git clone -b develop https://github.com/uzochukwueddie/chatty-backend.git
cd chatty-backend
npm install
```

- To start the server after installation, run

```bash
npm run dev
```

- Inside the `setupServer.ts` file, comment the line `sameSite: 'none'`.
- You'll need to uncomment that line again before you deploy to AWS.

Make sure mongodb and redis are both running on your local machine.

## Unit tests

- You can run the command `npm run test` to execute the unit tests added to the features controllers.

## API Endpoints

- The actual endpoints for the application can be found inside the folder named `endpoints` [https://github.com/uzochukwueddie/chatty-backend/tree/develop/endpoints](https://github.com/uzochukwueddie/chatty-backend/tree/develop/endpoints).
- The endpoint files all have a `.http` extension.
- To use this files to make api calls, install the extension called [rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) on vscode.
- Update the endpoints http files before using.
- The files inside the endpoints folder contains APIs for
  - Authentication
  - Chat
  - Comments
  - Followers, following, block and unblock
  - Health
  - Images
  - Notification
  - Posts
  - Reactions
  - User

## View Data

- You can view the contents of your redis cache by using a tool called [redis-commander](https://www.npmjs.com/package/redis-commander).
- Download mongodb compass to view data. [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass).
