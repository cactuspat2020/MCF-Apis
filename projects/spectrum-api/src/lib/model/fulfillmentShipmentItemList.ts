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
import { FulfillmentShipmentItem } from './fulfillmentShipmentItem';

/**
 * A comma-delimited list of fulfillment shipment item information.
 */
export interface FulfillmentShipmentItemList extends Array<FulfillmentShipmentItem> { 
}