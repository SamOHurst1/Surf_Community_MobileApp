import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument, PutCommand } from '@aws-sdk/lib-dynamodb';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const client = new DynamoDBClient({
    region: 'eu-west-2',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
});

const docClient = DynamoDBDocument.from(client);

export { PutCommand, docClient };
