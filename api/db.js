import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
    region: 'eu-west-2',
    credentials: {
        accessKeyId: '',
        secretAccessKey: '',
    },
});

const docClient = DynamoDBDocument.from(client);

export { PutCommand, docClient };
