/**
 * Listings
 * These APIs allow access to pricing data of offers listed by authorizing selling partners as well as certain competitive pricing data related to offers by other selling partners on Amazon.
 *
 * OpenAPI spec version: v1
 * Contact: marketplaceapitest@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AvailabilityType } from './availabilityType';

export interface DetailedShippingTime { 
    /**
     * The minimum time, in hours, that the item will likely be shipped after the order has been placed.
     */
    minimumHours?: number;
    /**
     * The maximum time, in hours, that the item will likely be shipped after the order has been placed.
     */
    maximumHours?: number;
    /**
     * Date time in the the RFC 3339 format.
     */
    availabilityDate?: string;
    availabilityType?: AvailabilityType;
}