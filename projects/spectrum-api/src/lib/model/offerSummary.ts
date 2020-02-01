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
import { Condition } from './condition';
import { FulfillmentNetwork } from './fulfillmentNetwork';

/**
 * The total number of offers for the specified condition and fulfillment channel.
 */
export interface OfferSummary { 
    condition?: Condition;
    fulfillmentChannel?: FulfillmentNetwork;
    /**
     * The number of offers in a fulfillment channel that meet a specific condition.
     */
    offerCount?: number;
}