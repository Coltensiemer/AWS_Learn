import { PrismaClient } from '@prisma/client'
import {mockDeep, mockReset, DeepMockProxy} from 'jest-mock-extended'
import prisma from '../prisma/prisma'


//Used to mock the prisma client and reset it before each test
//Documentation: https://www.prisma.io/docs/orm/prisma-client/testing/unit-testing

jest.mock('../prisma/prisma', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>
