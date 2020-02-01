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

/**
 * An item that Amazon accepted for return.
 */
export interface CreateReturnItem { 
    /**
     * An identifier assigned by the seller to the return item.
     */
    sellerReturnItemId: string;
    /**
     * The identifier assigned to the item by the seller when the fulfillment order was created.
     */
    sellerFulfillmentOrderItemId: string;
    /**
     * The identifier for the shipment that is associated with the return item.
     */
    amazonShipmentId: string;
    /**
     * The return reason code assigned to the return item by the seller.
     */
    returnReasonCode: string;
    /**
     * An optional comment about the return item.
     */
    returnComment?: string;
}