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
import { InvalidItemReason } from './invalidItemReason';

/**
 * An item that is invalid for return.
 */
export interface InvalidReturnItem { 
    /**
     * An identifier assigned by the seller to the return item.
     */
    sellerReturnItemId: string;
    /**
     * The identifier assigned to the item by the seller when the fulfillment order was created.
     */
    sellerFulfillmentOrderItemId: string;
    invalidItemReason: InvalidItemReason;
}