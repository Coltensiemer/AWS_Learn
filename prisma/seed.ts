import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import fs from 'fs'; // File system module








/// This creates a user with the email for seed data
async function main() {

    try{
      //Delete all users to clear the database
      await prisma.user.deleteMany();
    
      await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: 'password',
    },
  }) 

  await prisma.option.deleteMany();
  await prisma.quiz.deleteMany();

  const jsonData = fs.readFileSync('src/Data.ts', 'utf8');
  const data = JSON.parse(jsonData);

  for (const item of data) {
    await prisma.quiz.create({
      data: {
        tag: item.tag,
        question: item.question,
        correct_answer: item.correct_answer,
        options: {
          create: item.options.map((option: any) => ({
            value: option.value,
            isCorrect: option.isCorrect // Set isCorrect based on the value field of each option
          }))
        }
      }
    });
  }
  
} 
catch(error){
  throw error;
}
}



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })