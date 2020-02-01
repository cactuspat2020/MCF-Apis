/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you fulfill Multi-Channel Fulfillment orders using your inventory in Amazon's fulfillment network. You can get information on potential and existing fulfillment orders.
 *
 * OpenAPI spec version: v0
 * Contact: marketplaceapitest@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FulfillmentPreviewList } from './fulfillmentPreviewList';

/**
 * A list of fulfillment order previews, including estimated shipping weights, estimated shipping fees, and estimated ship dates and arrival dates.
 */
export interface GetFulfillmentPreviewResult { 
    fulfillmentPreviews?: FulfillmentPreviewList;
}