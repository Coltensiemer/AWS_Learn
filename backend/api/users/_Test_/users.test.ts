import { prismaMock } from '../../../singleton';
import { handler } from '../index';
import { APIGatewayEvent, Context } from 'aws-lambda';
import createUserEvent from '../../../events/event-post-user.json'; 


test('should create new user ', async () => {
const input = createUserEvent;
const expectedResponse =  JSON.parse(input.body || '{}');


// const result = await handler(input as APIGatewayEvent);



  
})