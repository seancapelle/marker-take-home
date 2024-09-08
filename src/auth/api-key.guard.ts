import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authorizationHeader = request.headers['authorization']; // API key is expected in the 'x-api-key' header

    // Extract the API key from the 'Authorization' header (assumed to be in the format "Bearer <API_KEY>")
    if (!authorizationHeader) {
      throw new UnauthorizedException(
        'Authorization header is required to access this endpoint',
      );
    }

    const validApiKey = `Bearer ${process.env.API_KEY}`;

    if (authorizationHeader === validApiKey) {
      return true;
    } else {
      throw new UnauthorizedException('Invalid API Key');
    }
  }
}
