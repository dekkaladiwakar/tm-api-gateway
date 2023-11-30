// To run this script: ts-node generate-admin-token.ts
import { NestFactory } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { InternalModule } from './internal.module';

async function generateToken() {
  const app = await NestFactory.createApplicationContext(InternalModule);
  const jwtService = app.get(JwtService);

  const payload = { username: 'diwakar', sub: '1', type: 'admin' }; // Customize as needed
  const token = jwtService.sign(payload);

  console.log(`Admin Token: ${token}`);

  await app.close();
}

generateToken().catch((error) => {
  console.error('Error generating token:', error);
  process.exit(1);
});
