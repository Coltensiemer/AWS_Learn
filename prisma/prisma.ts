import { PrismaClient } from '@prisma/client';
// import {Config} from 'sst/node/config';

///ADD SST CONFIG
// SET DATABASE_URL in SSM or Parameter Store in AWS? 
// Figure out PrismaClientOptions 


const prismaClientSingleton = () => {
	return new PrismaClient();
};

declare global {
	var prismaGlobal: PrismaClient | undefined
}

const prisma = globalThis.prismaGlobal || 
new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
})


if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;


export default prisma;
