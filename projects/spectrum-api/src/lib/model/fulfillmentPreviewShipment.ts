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
import { FulfillmentPreviewItemList } from './fulfillmentPreviewItemList';
import { Timestamp } from './timestamp';

/**
 * Delivery and item information for a shipment in a fulfillment order preview.
 */
export interface FulfillmentPreviewShipment { 
    earliestShipDate: Timestamp;
    latestShipDate: Timestamp;
    earliestArrivalDate: Timestamp;
    latestArrivalDate: Timestamp;
    fulfillmentPreviewItems: FulfillmentPreviewItemList;
}