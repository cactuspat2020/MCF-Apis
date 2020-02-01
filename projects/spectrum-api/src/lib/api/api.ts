// export * from './listings.service';
// export * from './fbaOutbound.service';
import { ListingsService } from './listings.service';
import { FbaOutboundService } from './fbaOutbound.service';
export const APIS = [
  ListingsService,
  FbaOutboundService
];
