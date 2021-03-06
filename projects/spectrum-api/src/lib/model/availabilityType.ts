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

/**
 * Indicates whether the item is available for shipping now, or on a known or an unknown date in the future.
 */
export type AvailabilityType = 'NOW' | 'FUTURE_WITHOUT_DATE' | 'FUTURE_WITH_DATE';

export const AvailabilityType = {
    NOW: 'NOW' as AvailabilityType,
    FUTUREWITHOUTDATE: 'FUTURE_WITHOUT_DATE' as AvailabilityType,
    FUTUREWITHDATE: 'FUTURE_WITH_DATE' as AvailabilityType
};